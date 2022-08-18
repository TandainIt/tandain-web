export interface LoginResult {
	login: {
		idToken: string;
		expiryDate: number;
		refreshToken: string;
	};
}
