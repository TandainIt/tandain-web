export interface FontSizeByKeys {
	xl: 'ExtraLarge';
	lg: 'Large';
	md: 'Medium';
  sm: 'Small';
	xs: 'ExtraSmall';
}

export interface FontSizeByTags {
	h1: 'ExtraLarge';
	h2: 'Large';
	h3: 'Medium';
  h4: 'Small';
	h5: 'ExtraSmall';
}

export type GetFontSizeReturn =
	| FontSizeByKeys[keyof FontSizeByKeys]
	| FontSizeByTags[keyof FontSizeByTags];
