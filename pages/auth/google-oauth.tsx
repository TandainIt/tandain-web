import { sendAuthCodeToWindowParent } from "@/utils/auth/google";

const GoogleOauthLoading = () => {
  if(typeof window !== "undefined" && window.opener) {
    sendAuthCodeToWindowParent();
    window.close();
  }

	return <div>Loading...</div>;
};

export default GoogleOauthLoading;
