import { generateRandomString } from '@/__tests__/utils';
import { configureStore } from '@reduxjs/toolkit';

import * as authGraphQL from '@/modules/auth/graphql/auth';
import { loginWithGoogle } from './auth';

import authReducer, {
	initialState as initialAuthState,
} from '../reducers/auth';

const mockLoginWithGoogleMutation = jest.spyOn(
	authGraphQL,
	'loginWithGoogleMutation'
);

const configureTestStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
		},
	});
};

describe('actions/auth', () => {
	let store: ReturnType<typeof configureTestStore>;

	beforeEach(() => {
		store = configureTestStore();
	});

	it('should store authentication credentials state from succesful login', async () => {
		const mockLoginParams = {
			code: generateRandomString(),
			redirectUri: process.env.GOOGLE_REDIRECT_URI,
		};

		const mockLoginMutationResult = {
			idToken: generateRandomString(),
			expiryDate: 1660943257204,
			refreshToken: generateRandomString(),
		};

		mockLoginWithGoogleMutation.mockResolvedValue(mockLoginMutationResult);

		await store.dispatch(loginWithGoogle(mockLoginParams));
		const state = store.getState();

		expect(mockLoginWithGoogleMutation).toHaveBeenCalledWith(mockLoginParams);
		expect(state.auth).toEqual({
			...initialAuthState,
			credentials: mockLoginMutationResult,
		});
	});

	it('should toggle isLoading state when login is still waiting for the response', async () => {
		const mockLoginParams = {
			code: generateRandomString(),
			redirectUri: process.env.GOOGLE_REDIRECT_URI,
		};

		const mockLoginMutationResult = {
			idToken: generateRandomString(),
			expiryDate: 1660943257204,
			refreshToken: generateRandomString(),
		};

		mockLoginWithGoogleMutation.mockImplementation(() => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(mockLoginMutationResult);
				}, 2000);
			});
		});

		store.dispatch(loginWithGoogle(mockLoginParams));
		const state = store.getState();

		expect(mockLoginWithGoogleMutation).toHaveBeenCalledWith(mockLoginParams);
		expect(state.auth).toEqual({
			...initialAuthState,
			isLoading: true,
		});
	});

	it('should store error object if login is error', async () => {
		const mockLoginParams = {
			code: generateRandomString(),
			redirectUri: process.env.GOOGLE_REDIRECT_URI,
		};

		const mockLoginMutationError = {
			message: 'Could not invoke operation POST /api/v1/auth/login',
			graphQLErrors: [
				{
					message: 'Could not invoke operation POST /api/v1/auth/login',
					path: ['login'],
					extensions: {
						method: 'post',
						path: '/api/v1/auth/login',
						statusText: 'Bad Request',
						statusCode: 400,
						responseBody: {
							name: 'Invalid Request',
							code: 400,
							message: "Required parameter 'code' is invalid",
						},
					},
				},
			],
		};

		mockLoginWithGoogleMutation.mockRejectedValue(mockLoginMutationError);

		await store.dispatch(loginWithGoogle(mockLoginParams));
		const state = store.getState();

		expect(mockLoginWithGoogleMutation).toHaveBeenCalledWith(mockLoginParams);
		expect(state.auth).toEqual({
			...initialAuthState,
			error: mockLoginMutationError,
		});
	});
});
