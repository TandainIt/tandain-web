import * as authActions from '@/store/actions/auth';
import { generateRandomString } from '@/utils/global';
import {
	getPopupParams,
	sendAuthCodeToWindowParent,
	showGoogleLoginPopup,
} from './auth';

const mockLoginWithGoogleAction = jest.spyOn(authActions, 'loginWithGoogle');

const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

describe('auth/utils', () => {
	describe('showGoogleLoginPopup', () => {
		it('it should open Google Login popup on the new window', () => {
			const redirectURI = REDIRECT_URI;
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
		afterEach(() => {
			mockLoginWithGoogleAction.mockRestore();
		});

		it('should call loginWithGoogle action with code and redirectUri', () => {
			const mockCode = generateRandomString();

			const mockMessageEvent = {
				...new MessageEvent('message'),
				origin: process.env.CLIENT_URL,
				data: {
					code: mockCode,
				},
			};

			getPopupParams(mockMessageEvent);

			expect(mockLoginWithGoogleAction).toHaveBeenCalledWith({
				code: mockCode,
				redirectUri: REDIRECT_URI,
			});
		});

		it('should not call loginWithGoogle action if sender of the message event is not from its original opener', () => {
			const mockMessageEvent = {
				...new MessageEvent('message'),
				origin: process.env.CLIENT_URL,
				data: {
					code: generateRandomString(),
				},
			};

			getPopupParams(mockMessageEvent);

			expect(mockLoginWithGoogleAction).not.toHaveBeenCalled();
		});

		it('should not call loginWithGoogle if code or scope is empty', () => {
			const mockMessageEvent = {
				...new MessageEvent('message'),
				origin: process.env.CLIENT_URL,
				data: {},
			};

			getPopupParams(mockMessageEvent);

			expect(mockLoginWithGoogleAction).not.toHaveBeenCalled();
		});
	});
});
