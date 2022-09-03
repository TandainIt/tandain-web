import { createElement, FC } from 'react';

import classes from './Title.module.sass';
import { TitleProps, TitleTags } from './Title.types';
import { ComponentSizes } from '@/types';
import { sizes as fontSizes } from '@/utils/variables';

const useTitle = (as: TitleTags, size: keyof ComponentSizes) => {
	const getFontSize = (fontTag: TitleTags, fontSize?: keyof ComponentSizes) => {
		const fontSizeByTags = {
			h1: 'ExtraLarge',
			h2: 'Large',
			h3: 'Medium',
			h4: 'Small',
			h5: 'ExtraSmall',
			h6: 'ExtraExtraSmall',
		};

		return size ? fontSizes[fontSize] : fontSizeByTags[fontTag];
	};

	const selectedSize = getFontSize(as, size);

	return {
		selectedSize,
	};
};

const Title: FC<TitleProps> = ({
	as = 'h1',
	size,
	className = '',
	...rest
}) => {
	const { selectedSize } = useTitle(as, size);

	return createElement(as, {
		className: `${classes.Title} ${classes[selectedSize]} ${className}`,
		...rest,
	});
};

export default Title;
