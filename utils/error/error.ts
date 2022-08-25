import { AxiosError } from "axios";

const axiosError = {
	ERR_NETWORK: {
		displayName: 'Oops, something went wrong',
		displayMessage: 'Please try again later.',
	},
};

const errors = {
	...axiosError,
};

export const paraphraseError = (error: AxiosError) => {
	return {
		...error,
		...errors[error.code],
	};
};

export const isError = (error: AxiosError) => {
	return (
		error &&
		error.stack &&
		error.message &&
		typeof error.stack === 'string' &&
		typeof error.message === 'string'
	);
};
