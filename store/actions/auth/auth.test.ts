import { initialState as initialAuthState } from '../../reducers/auth';
import { generateRandomString } from '@/utils/global';
import { configureTestStore } from '@/utils/test';
import {
	loginWithGoogleMutation,
	refreshTokenMutation,
} from '@/modules/auth/graphql/auth';
import { loginWithGoogle, refreshGoogleToken } from './auth';

jest.mock('@/modules/auth/graphql/auth');

describe('actions/auth', () => {
	let store: ReturnType<typeof configureTestStore>;
	let mockLoginWithGoogleMutation: any;
	let mockRefreshTokenMutation: any;

	beforeEach(() => {
		store = configureTestStore();
		mockLoginWithGoogleMutation = loginWithGoogleMutation;
		mockRefreshTokenMutation = refreshTokenMutation;
	});

	describe('loginWithGoogle', () => {
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

	describe('refreshGoogleToken', () => {
		it('should store authentication credentials state from succesful refresh token', async () => {
			const mockRefreshGoogleTokenParams = {
				refreshToken: generateRandomString(128),
			};

			const mockRefreshTokenMutationResult = {
				idToken: generateRandomString(64),
				expiryDate: 1660943257204,
				refreshToken: generateRandomString(128),
			};

			mockRefreshTokenMutation.mockResolvedValue(
				mockRefreshTokenMutationResult
			);

			await store.dispatch(refreshGoogleToken(mockRefreshGoogleTokenParams));
			const state = store.getState();

			expect(mockRefreshTokenMutation).toHaveBeenCalledWith(
				mockRefreshGoogleTokenParams
			);
			expect(state.auth).toEqual({
				...initialAuthState,
				credentials: mockRefreshTokenMutationResult,
			});
		});

		it('should toggle isLoading state when login is still waiting for the response', async () => {
			const mockRefreshGoogleTokenParams = {
				refreshToken: generateRandomString(128),
			};

			const mockRefreshTokenMutationResult = {
				idToken: generateRandomString(64),
				expiryDate: 1660943257204,
				refreshToken: generateRandomString(128),
			};

			mockRefreshTokenMutation.mockImplementation(() => {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve(mockRefreshTokenMutationResult);
					}, 2000);
				});
			});

			store.dispatch(refreshGoogleToken(mockRefreshGoogleTokenParams));
			const state = store.getState();

			expect(mockRefreshTokenMutation).toHaveBeenCalledWith(
				mockRefreshGoogleTokenParams
			);
			expect(state.auth).toEqual({
				...initialAuthState,
				isLoading: true,
			});
		});

		it('should store error object if refresh token is error', async () => {
			const mockRefreshGoogleTokenParams = {
				refreshToken: generateRandomString(128),
			};

			const mockRefreshTokenError = {
				message: 'Could not invoke operation POST /api/v1/auth/refresh',
				graphQLErrors: [
					{
						message: 'Could not invoke operation POST /api/v1/auth/refresh',
						path: ['refreshToken'],
						extensions: {
							method: 'post',
							path: '/api/v1/auth/refresh',
							statusText: 'Bad Request',
							statusCode: 400,
							responseBody: {
								name: 'INVALID_REFRESH_TOKEN',
								code: 400,
								message: "Required parameter 'refresh_token' is invalid",
							},
						},
					},
				],
			};

			mockRefreshTokenMutation.mockRejectedValue(mockRefreshTokenError);

			await store.dispatch(refreshGoogleToken(mockRefreshGoogleTokenParams));
			const state = store.getState();

			expect(mockRefreshTokenMutation).toHaveBeenCalledWith(
				mockRefreshGoogleTokenParams
			);
			expect(state.auth).toEqual({
				...initialAuthState,
				error: mockRefreshTokenError,
			});
		});
	});
});
