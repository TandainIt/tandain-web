import { FC } from 'react';
import clsx from 'clsx';

import BaseButton from '../BaseButton/BaseButton';

import { ButtonProps } from './';

import { sizes as buttonSizes } from '@/utils/variables';
import { capitalize } from '@/utils/string';

import classes from './Button.module.sass';

const Button: FC<ButtonProps> = ({
	as,
	href,
	variant = 'solid',
	size = 'md',
	color = 'primary',
	className = '',
	iconClassName,
	children,
	round,
	startIcon,
	...rest
}) => {
	return (
		<BaseButton
			as={as}
			href={href}
			className={clsx(
				classes.Button,
				classes[buttonSizes[size]],
				classes[capitalize(variant)],
				classes[capitalize(color)],
				round && classes.Round,
				!children && classes.IconOnly,
				className
			)}
			{...rest}
		>
			{startIcon && (
				<i className={clsx(classes.Icon, iconClassName, children && 'mr0p5')}>
					{startIcon}
				</i>
			)}
			{children}
		</BaseButton>
	);
};

export default Button;
