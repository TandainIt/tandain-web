import { generateRandomString } from '@/__tests__/utils';
import { capitalize } from './string';

describe('utils/string', () => {
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
});
