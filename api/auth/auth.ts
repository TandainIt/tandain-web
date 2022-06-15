import { paraphraseError } from '@/utils/error/error';
import axios from 'axios';

export const loginWithGoogle = async (code: string, scope: string) => {
	const url = `${process.env.API_URL}/api/v1/google-oauth`;
	const body = { code, scope };

	try {
		return await axios.post(url, body);
	} catch (err) {
		throw paraphraseError(err);
	}
};
