import { loginWithGoogle } from '@/api/auth';
import store from '@/store';
import { setToastError } from '@/store/actions/page';

const CLIENT_URL = process.env.CLIENT_URL;
let windowRef = null;

export const getPopupParams = async (e: any) => {
	// NOTE: Check if sender of this message is from what we originally opened
	if (e.origin === CLIENT_URL) {
		const { code, scope } = e.data;

		if (code && scope) {
			window.removeEventListener('message', getPopupParams);

			try {
				await loginWithGoogle(code, scope);
			} catch (err) {
				store.dispatch(setToastError(err));
			}
		}
	}
};

export const showGoogleLoginPopup = () => {
	const redirectURI = `${CLIENT_URL}/auth/google-oauth`;
	const prompType = 'select_account';
	const responseType = 'code';
	const clientId = process.env.GOOGLE_CLIENT_ID;

	// NOTE: The scopes are userinfo.email and userinfo.profile
	const scope =
		'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile';

	const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectURI}&prompt=${prompType}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;

	const windowProps =
		'menubar=yes,location=no,resizable=yes,scrollbars=yes,status=no';
	let previousURL = null;

	if (windowRef === null || windowRef.closed) {
		// NOTE: if the pointer to the window object in memory does not exist or the window was closed

		windowRef = window.open(loginURL, 'Tandain', windowProps);
	} else {
		// NOTE: bring it back on top of any other window

		windowRef.focus();
	}

	window.addEventListener('message', getPopupParams, false);
	previousURL = loginURL;
};

export function sendAuthCodeToWindowParent() {
	const searchParams = new URLSearchParams(window.location.search);

	const code = searchParams.get('code');
	const scope = searchParams.get('scope');

	window.opener.postMessage({ code, scope });
}
