export interface LoginParams {
	code: string;
	redirectUri: string;
}

export interface LoginResult {
	login: {
		idToken: string;
		expiryDate: number;
		refreshToken: string;
	};
}
