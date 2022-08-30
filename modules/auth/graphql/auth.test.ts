import apolloClient from '@/loaders/apolloClient';
import { loginWithGoogleMutation } from './auth';
import { generateRandomString } from '@/utils/global';

const REDIRECT_URI = `${process.env.CLIENT_URL}/auth/google-oauth`;

const mockApolloMutation = jest.spyOn(apolloClient, 'mutate');

describe('graphql/auth', () => {
	it('should successfully return idToken, expiryDate, and refreshToken', async () => {
		const mockLoginResult = {
			idToken: generateRandomString(),
			expiryDate: 1660943257204,
			refreshToken: generateRandomString(),
		};

		mockApolloMutation.mockResolvedValue({
			data: {
				login: mockLoginResult,
			},
		});

		const result = await loginWithGoogleMutation({
			code: generateRandomString(),
			redirectUri: REDIRECT_URI,
		});

		expect(result).toMatchObject(mockLoginResult);
	});

	it('should throw an GraphQL Error if code is invalid', async () => {
		const mockLoginError = {
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

		mockApolloMutation.mockRejectedValue(mockLoginError);

		try {
			await loginWithGoogleMutation({
				code: 'invalid_code',
				redirectUri: REDIRECT_URI,
			});
		} catch (err) {
			expect(err).toEqual(mockLoginError);
		}
	});

	it('should throw an GraphQL Error if rerdirectUri is invalid', async () => {
		const mockLoginError = {
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
							message: "Required parameter 'redirectUri' is invalid",
						},
					},
				},
			],
		};

		mockApolloMutation.mockRejectedValue(mockLoginError);

		try {
			await loginWithGoogleMutation({
				code: generateRandomString(),
				redirectUri: 'invalid_redirect_uri',
			});
		} catch (err) {
			expect(err).toEqual(mockLoginError);
		}
	});
});
