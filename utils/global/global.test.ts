import { capitalize, generateRandomString, isValidURL } from './global';

describe('utils/global', () => {
	describe('capitalize', () => {
		it('should capitalize first letter of the string', () => {
			const string = generateRandomString();
			const capitalizedString = capitalize(string);

			const uppercasedFirstLetter = string.charAt(0).toUpperCase();
			const firstCapitalizedString = capitalizedString.charAt(0);

			const restString = string.slice(1);
			const restCapitalizedString = capitalizedString.slice(1);

			expect(firstCapitalizedString).toEqual(uppercasedFirstLetter);
			expect(restCapitalizedString).toEqual(restString);
		});
	});

	describe('generateRandomString', () => {
		it('should generate random string', () => {
			const randomString = generateRandomString();

			expect(typeof randomString).toEqual('string');
		});

		it('should generate random string with length accordance by param', () => {
			const randomString = generateRandomString(128);

			expect(typeof randomString).toEqual('string');
			expect(randomString.length).toEqual(128);
		});
	});

	describe('isValidURL', () => {
		it('should return true if URL is consist of scheme, subdomain, domain, and top-level domain', () => {
			const result = isValidURL('https://www.google.com');

			expect(result).toEqual(true);
		});

		it('should return true if URL is consist of subdomain, domain, and top-level domain', () => {
			const result = isValidURL('www.google.com');

			expect(result).toEqual(true);
		});

		it('should return true if URL is consist of domain and top-level domain', () => {
			const result = isValidURL('google.com');

			expect(result).toEqual(true);
		});

		it('should return false if URL is not valid', () => {
			const invalidURL = isValidURL('google@com');
			const typoURL = isValidURL('google..com');

			expect(invalidURL).toEqual(false);
			expect(typoURL).toEqual(false);
		});
	});
});
