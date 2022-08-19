import { createReducer } from '@reduxjs/toolkit';

import { loginWithGoogle } from '../actions/auth';

const initialState = {
	credentials: {
		idToken: undefined,
		expiryDate: undefined,
		refreshToken: undefined,
	},
	isLoading: false,
  error: undefined
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(loginWithGoogle.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
			state.credentials = payload;
			state.isLoading = false;
		});
});

export default authReducer;
