import { FC } from 'react';

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
	children,
	round,
	startIcon,
	...rest
}) => {
	return (
		<BaseButton
			as={as}
			href={href}
			className={`
        ${classes.Button}
        ${classes[buttonSizes[size]]} 
        ${classes[capitalize(variant)]}
        ${classes[capitalize(color)]}
        ${round && classes.Round}
        ${!children ? classes.IconOnly : ''}
        ${className}
      `}
			{...rest}
		>
			{startIcon && (
				<i className={`${classes.Icon} ${children && 'mr0p5'}`}>{startIcon}</i>
			)}
			{children}
		</BaseButton>
	);
};

export default Button;
