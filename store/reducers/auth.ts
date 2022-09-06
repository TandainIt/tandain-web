import { createReducer } from '@reduxjs/toolkit';

import { loginWithGoogle, refreshGoogleToken } from '../actions/auth';

export const initialState = {
	credentials: {
		idToken: undefined,
		expiryDate: undefined,
		refreshToken: undefined,
	},
	isLoading: false,
	error: undefined,
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(loginWithGoogle.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
			state.credentials = payload;
			state.isLoading = false;
		})
		.addCase(loginWithGoogle.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		})
		.addCase(refreshGoogleToken.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(refreshGoogleToken.fulfilled, (state, { payload }) => {
			state.credentials = payload;
			state.isLoading = false;
		})
		.addCase(refreshGoogleToken.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});
});

export default authReducer;
