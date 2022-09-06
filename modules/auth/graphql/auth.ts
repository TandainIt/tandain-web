import { FetchResult } from '@apollo/client';

import apolloClient from '@/loaders/apolloClient';
import { LOGIN_WITH_GOOGLE, REFRESH_TOKEN } from './auth.query';

import {
	LoginParams,
	LoginResult,
	RefreshTokenParams,
	RefreshTokenSuccess,
} from './auth.types';

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

export const refreshTokenMutation = async ({
	refreshToken,
}: RefreshTokenParams) => {
	try {
		const result: FetchResult<RefreshTokenSuccess> = await apolloClient.mutate({
			mutation: REFRESH_TOKEN,
			variables: {
				refreshToken,
			},
		});

		return result.data.refreshToken;
	} catch (err) {
		throw err;
	}
};
