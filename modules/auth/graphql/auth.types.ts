export interface Credentials {
	idToken: string;
	expiryDate: number;
	refreshToken: string;
}

export interface LoginParams {
	code: string;
	redirectUri: string;
}

export interface LoginResult {
	login: Credentials;
}

export interface RefreshTokenParams {
	refreshToken: string;
}

export interface RefreshTokenSuccess {
	refreshToken: Credentials;
}
