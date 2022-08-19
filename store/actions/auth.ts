import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginParams, loginWithGoogleMutation } from '@/graphql/auth';

export const loginWithGoogle = createAsyncThunk(
	'user/login',
	async (params: LoginParams, { rejectWithValue }) => {
		try {
			const credentials = await loginWithGoogleMutation(params);

			localStorage.setItem('refresh_token', credentials.refreshToken);

			return credentials;
		} catch (err) {
      console.log('Err: ', err)

			return rejectWithValue(err);
		}
	}
);
