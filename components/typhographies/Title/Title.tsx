import { createElement } from 'react';

import { TitleProps } from './Title.types';

import { getFontSize } from './utils';

import classes from './Title.module.sass';

const Title = ({ as = 'h1', size, className = '', ...rest }: TitleProps) => {
	const selectedSize = getFontSize(size, as);

	return createElement(as, {
		className: `${classes.Title} ${classes[selectedSize]} ${className}`,
		...rest,
	});
};

export default Title;
