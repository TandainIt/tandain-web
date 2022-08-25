import { FetchResult } from '@apollo/client';

import apolloClient from '../apolloClient/apolloClient';
import { LOGIN_WITH_GOOGLE } from './auth.query';
import { LoginParams, LoginResult } from './auth.types';

export const loginWithGoogleMutation = async ({
	code,
	redirectUri,
}: LoginParams) => {
	try {
		const result: FetchResult<LoginResult> = await apolloClient.mutate({
			mutation: LOGIN_WITH_GOOGLE,
			variables: {
				code,
				redirectUri,
			},
		});

		return result.data.login;
	} catch (err) {
		throw err;
	}
};
