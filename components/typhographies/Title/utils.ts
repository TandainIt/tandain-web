import {
	FontSizeByKeys,
	FontSizeByTags,
	GetFontSizeReturn,
} from './utils.types';

export const getFontSize = (
	key: keyof FontSizeByKeys,
	tag?: keyof FontSizeByTags
): GetFontSizeReturn => {
	const fontSizeByKeys: FontSizeByKeys = {
		xl: 'ExtraLarge',
		lg: 'Large',
		md: 'Medium',
		xs: 'ExtraSmall',
	};

	const fontSizeByTags: FontSizeByTags = {
		h1: 'ExtraLarge',
		h2: 'Large',
		h3: 'Medium',
		h5: 'ExtraSmall',
	};

	return !!key ? fontSizeByKeys[key] : fontSizeByTags[tag];
};
