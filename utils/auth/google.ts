import { loginWithGoogle } from "@/api/auth";

const CLIENT_URL = process.env.CLIENT_URL;

export const getPopupParams = async (e: any) => {
  if(e.origin === CLIENT_URL) {
    const { code, scope } = e.data;

    if(code && scope) {
      loginWithGoogle(code, scope)
    }
  }
}

export const showGoogleLoginPopup = () => {
  const redirectURI = `${CLIENT_URL}/mylist`;
  const prompType = 'select_account';
  const responseType = 'code';
  const clientId = process.env.GOOGLE_CLIENT_ID;

  // NOTE: The scopes are userinfo.email and userinfo.profile
  const scope =
    'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile';

  const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectURI}'&prompt=${prompType}&response_type=${responseType}&client_id=${clientId}&scope=${scope}`;
  
  const windowProps = 'menubar=yes,location=no,resizable=yes,scrollbars=yes,status=no'
  let windowRef = null;
  let previousURL = null;

  if(windowRef === null || windowRef.closed()) {
    // NOTE: if the pointer to the window object in memory does not exist or the window was closed

    windowRef = window.open(loginURL, 'Tandain', windowProps)
  } else if (previousURL !== loginURL) {
    // NOTE: If the resource to load is different

    windowRef = window.open(loginURL, 'Tandain', windowProps)
  } else {
    // NOTE: bring it back on top of any other window

    windowRef.focus()
  }

  window.addEventListener('message', getPopupParams, false);
  previousURL = loginURL

};