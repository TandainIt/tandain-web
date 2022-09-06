import { gql } from '@apollo/client';

export const LOGIN_WITH_GOOGLE = gql`
	mutation LoginWithGoogle($code: String!, $redirectUri: String!) {
		login(body: { code: $code, redirectUri: $redirectUri }) {
			idToken
			refreshToken
			expiryDate
		}
	}
`;

export const REFRESH_TOKEN = gql`
	mutation RefreshToken($refreshToken: String!) {
		refreshToken(body: { refreshToken: $refreshToken }) {
			idToken
			refreshToken
			expiryDate
		}
	}
`;
