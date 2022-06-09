import clsx from 'clsx';
import { createElement, FC } from 'react';

import classes from './Text.module.sass';

import { TextProps } from './Text.types';
import { fontTypes, sizes as fontSize } from '@/utils/variables';

const Text: FC<TextProps> = ({
	as = 'span',
	font = 'sans-serif',
  size = 'md',
	className,
	...args
}) => {

	return createElement(as, {
		className: clsx(classes[fontTypes[font]], classes[fontSize[size]], className),
		...args,
	});

	// return (
	// 	<span
	// 		className={clsx(classes.Text, labelVariants[variant], className)}
	// 		{...args}
	// 	>
	// 		{children}
	// 	</span>
	// );
};

export default Text;
