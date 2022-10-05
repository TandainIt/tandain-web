import clsx from 'clsx';
import { createElement, FC } from 'react';

import classes from './Text.module.sass';

import { TextProps } from './Text.types';
import { fontTypes, sizes as fontSize, colors } from '@/utils/variables';

const Text: FC<TextProps> = ({
	as = 'span',
	font = 'sans-serif',
	size = 'md',
	color,
	className,
	...args
}) => {
	return createElement(as, {
		className: clsx(
			classes[fontTypes[font]],
			classes[fontSize[size]],
			classes[colors[color]],
			className
		),
		...args,
	});
};

export default Text;
