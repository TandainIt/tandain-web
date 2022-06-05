import { loginWithGoogle } from '@/api/auth';
import { generateRandomString } from '@/__tests__/utils';
import {
	getPopupParams,
	sendAuthCodeToWindowParent,
	showGoogleLoginPopup,
} from './google';

jest.mock('@/api/auth', () => ({
	...jest.requireActual('@/api/auth'),
	loginWithGoogle: jest.fn((params) => params),
}));

describe('utils/auth/google', () => {
	describe('showGoogleLoginPopup', () => {
		it('it should open Google Login popup on the new window', () => {
			const redirectURI = `${process.env.CLIENT_URL}/auth/google-oauth`;
			const prompType = 'select_account';
			const responseType = 'code';
			const clientId = process.env.GOOGLE_CLIENT_ID;

			const scope =
				'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile';

			const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectURI}&prompt=${prompType}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;
			const windowProps =
				'menubar=yes,location=no,resizable=yes,scrollbars=yes,status=no';

			window.open = jest.fn(() => window);

			showGoogleLoginPopup();

			expect(window.open).toHaveBeenCalledWith(
				loginURL,
				'Tandain',
				windowProps
			);
		});

		it('should bring Google Login popup window on top of any other window', () => {
			window.focus = jest.fn();

			showGoogleLoginPopup();

			expect(window.focus).toHaveBeenCalled();
		});
	});

	describe('sendAuthCodeToWindowParent', () => {
		it('should send the code and the scope in url parameters to window parent', () => {
			const code = generateRandomString();
			const scope = generateRandomString();

			Object.defineProperty(window, 'location', {
				value: {
					search: `?code=${code}&scope=${scope}`,
				},
			});

			Object.defineProperty(window, 'opener', {
				value: {
					postMessage: jest.fn((obj) => obj),
				},
			});

			sendAuthCodeToWindowParent();

			expect(window.opener.postMessage).toHaveBeenCalledWith({ code, scope });
		});
	});

	describe('getPopupParams', () => {
		jest.mock('@/api/auth', () => ({
			...jest.requireActual('@/api/auth'),
			loginWithGoogle: jest.fn((params) => params),
		}));

		let loginWithGoogleMock: jest.MockedFunction<typeof loginWithGoogle>;

		beforeEach(() => {
			loginWithGoogleMock = loginWithGoogle as jest.MockedFunction<
				typeof loginWithGoogle
			>;
		});

		afterEach(() => {
			loginWithGoogleMock.mockRestore();
		});

		it('should call loginWithGoogle with code and scope params', () => {
			const params = {
				code: generateRandomString(),
				scope: generateRandomString(),
			};

			const messageEvent = {
				...new MessageEvent('message'),
				origin: process.env.CLIENT_URL,
				data: params,
			};

			getPopupParams(messageEvent);

			expect(loginWithGoogle).toHaveBeenCalledWith(params.code, params.scope);
		});

		it('should not call loginWithGoogle if sender of the message is not from its originally opened', () => {
			const params = {
				code: generateRandomString(),
				scope: generateRandomString(),
			};

			const messageEvent = {
				...new MessageEvent('message'),
				origin: generateRandomString(),
				data: params,
			};

			getPopupParams(messageEvent);

			expect(loginWithGoogleMock).not.toHaveBeenCalled();
		});

		it('should not call loginWithGoogle if code or scope is empty', () => {
			const messageEvent = {
				...new MessageEvent('message'),
				origin: process.env.CLIENT_URL,
				data: {},
			};

			getPopupParams(messageEvent);

			expect(loginWithGoogle).not.toHaveBeenCalled();
		});
	});
});
