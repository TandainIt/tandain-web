import store from '@/store';
import { loginWithGoogle } from '@/store/actions/auth';

const CLIENT_URL = process.env.CLIENT_URL;
const REDIRECT_URI = `${CLIENT_URL}/auth/google-oauth`;
let windowRef = null;

export const getPopupParams = async (event: any) => {
	/**
	 * Get code query from URL
	 */

	const { origin, data } = event;

	if (origin !== CLIENT_URL || !data?.code) {
		/**
		 * Check if sender of this message is from what we originally opened or code is exists
		 */

		return;
	}

	window.removeEventListener('message', getPopupParams);
	const params = {
		code: data.code,
		redirectUri: REDIRECT_URI,
	};

	try {
		await store.dispatch(loginWithGoogle(params));
	} catch (err) {
		console.error(err);
	}
};

export const showGoogleLoginPopup = () => {
	const redirectURI = `${CLIENT_URL}/auth/google-oauth`;
	const prompType = 'select_account';
	const responseType = 'code';
	const clientId = process.env.GOOGLE_CLIENT_ID;

	/**
	 * The scopes are userinfo.email and userinfo.profile
	 */
	const scope =
		'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile';

	const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectURI}&prompt=${prompType}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;

	const windowProps =
		'menubar=yes,location=no,resizable=yes,scrollbars=yes,status=no';
	let previousURL = null;

	if (windowRef === null || windowRef.closed) {
		/**
		 * If the pointer to the window object in memory does not exist or the window was closed
		 */

		windowRef = window.open(loginURL, 'Tandain', windowProps);
	} else {
		/**
		 * Bring popup back to the top of any other window
		 */

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
