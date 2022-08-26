import { sendAuthCodeToWindowParent } from '@/modules/auth/utils';

const GoogleOauthLoading = () => {
	if (typeof window !== 'undefined' && window.opener) {
		sendAuthCodeToWindowParent();
		window.close();
	}

	return <div>Loading...</div>;
};

export default GoogleOauthLoading;
