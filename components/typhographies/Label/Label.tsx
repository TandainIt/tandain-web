import clsx from 'clsx';
import { FC } from 'react';

import classes from './Label.module.sass';
import { LabelProps } from './Label.types';

const Label: FC<LabelProps> = ({
	variant = 'sans-serif',
	className,
	children,
	...rest
}) => {
	const labelVariants = {
		'sans-serif': classes.SansSerif,
		serif: classes.Serif,
	};

	return (
		<span
			className={clsx(classes.Label, labelVariants[variant], className)}
			{...rest}
		>
			{children}
		</span>
	);
};

export default Label;
