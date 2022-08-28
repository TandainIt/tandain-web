export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const generateRandomString = (length?: number): string => {
	length = length || Math.random();

	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
};
