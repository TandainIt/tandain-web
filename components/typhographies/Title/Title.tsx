import { createElement } from 'react';
import clsx from 'clsx';

import { TitleProps } from './Title.types';

import classes from './Title.module.sass';
import { sizes as fontSizeByKey } from '@/utils/variables';

export const fontSizeByTag = {
  h1: 'ExtraExtraExtraLarge',
  h2: 'ExtraExtraLarge',
  h3: 'ExtraLarge',
  h4: 'Large',
  h5: 'Medium',
};

const Title = ({ as = 'h1', size, className = '', ...rest }: TitleProps) => {

	return createElement(as, {
		className: clsx(
			classes.Title,
			classes[fontSizeByKey[size] || fontSizeByTag[as]],
			className
		),
		...rest,
	});
};

export default Title;
