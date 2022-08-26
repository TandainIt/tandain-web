import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginParams, loginWithGoogleMutation } from '@/modules/auth/graphql';

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
