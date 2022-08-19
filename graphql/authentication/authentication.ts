import { FetchResult } from '@apollo/client';

import apolloClient from '../apolloClient/apolloClient';
import { LOGIN_WITH_GOOGLE } from './authentication.query';
import { LoginResult } from './authentication.types';

export const loginWithGoogle = async (code: string, redirectUri: string) => {
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
    throw err
	}
};
