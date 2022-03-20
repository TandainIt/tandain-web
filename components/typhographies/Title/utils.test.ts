import { getFontSize } from './utils';

describe('Title/utils', () => {
	describe('getFontSize', () => {
		it('should return correct value based on key input', () => {
			const xlKey = getFontSize('xl', 'h5');
			const lgKey = getFontSize('lg', 'h1');
			const mdKey = getFontSize('md', 'h2');
			const xsKey = getFontSize('xs', 'h3');

			expect(xlKey).toEqual('ExtraLarge');
			expect(lgKey).toEqual('Large');
			expect(mdKey).toEqual('Medium');
			expect(xsKey).toEqual('ExtraSmall');
		});

		it('should return correct value based on tag input', () => {
			const xlKey = getFontSize(undefined, 'h1');
			const lgKey = getFontSize(undefined, 'h2');
			const mdKey = getFontSize(undefined, 'h3');
			const xsKey = getFontSize(undefined, 'h5');

			expect(xlKey).toEqual('ExtraLarge');
			expect(lgKey).toEqual('Large');
			expect(mdKey).toEqual('Medium');
			expect(xsKey).toEqual('ExtraSmall');
		});
	});
});
