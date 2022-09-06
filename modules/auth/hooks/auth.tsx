import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { refreshGoogleToken } from '@/store/actions/auth';

export const useAuth = (nextPath?: string) => {
	const [authLoading, setAuthLoading] = useState(true);

	const dispatch = useAppDispatch();
	const router = useRouter();
	const {
		credentials,
		isLoading: fetchLoading,
		error,
	} = useAppSelector(({ auth }) => auth);
	const { idToken } = credentials;

	useEffect(() => {
		const refreshToken = localStorage.getItem('refresh_token');

		if (idToken && nextPath) {
			/**
			 * Replace to desired path if user is authenticated and desired path is exists
			 */

			router.replace(nextPath);
		} else if (refreshToken && !idToken && !error) {
			/**
			 * Refresh the token if user is not authenticated but the refresh token is exists
			 */

			dispatch(refreshGoogleToken({ refreshToken }));
		} else if (
			!idToken &&
			router.asPath !== '/login' &&
			router.asPath !== '/signup'
		) {
			/**
			 * Replace to login page if user is not authenticated and user is not on login or sign up page
			 */

			router.replace('/login');
		} else if (!fetchLoading && authLoading) {
			/**
			 * Set loading to false is fetching credentials is done and authLoading is still true
			 */

			setAuthLoading(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idToken, error]);

	return { isLoading: authLoading || fetchLoading, idToken };
};
