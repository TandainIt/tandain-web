import { Spinner } from '@/components/ui';
import { sendAuthCodeToWindowParent } from '@/modules/auth/utils';

import classes from '@/modules/auth/GoogleOauthLoadingPage/GoogleOauthLoadingPage.module.sass';

const GoogleOauthLoading = () => {
	if (typeof window !== 'undefined' && window.opener) {
		sendAuthCodeToWindowParent();
		window.close();
	}

	return (
		<main className={classes.Main}>
			<Spinner />
		</main>
	);
};

export default GoogleOauthLoading;
