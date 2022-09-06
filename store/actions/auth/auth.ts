import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	LoginParams,
	loginWithGoogleMutation,
	refreshTokenMutation,
} from '@/modules/auth/graphql';
import { RefreshTokenParams } from '@/modules/auth/graphql/auth.types';

export const loginWithGoogle = createAsyncThunk(
	'user/login',
	async (params: LoginParams, { rejectWithValue }) => {
		try {
			const credentials = await loginWithGoogleMutation(params);

			localStorage.setItem('refresh_token', credentials.refreshToken);

			return credentials;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const refreshGoogleToken = createAsyncThunk(
	'user/refresh-token',
	async (params: RefreshTokenParams, { rejectWithValue }) => {
		try {
			const credentials = await refreshTokenMutation(params);

			localStorage.setItem('refresh_token', credentials.refreshToken);

			return credentials;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);
