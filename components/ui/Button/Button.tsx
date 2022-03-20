import { FC } from 'react';

import BaseButton from '../BaseButton/BaseButton';

import { ButtonProps } from './';
import classes from './Button.module.scss';

const Button: FC<ButtonProps> = ({
	as,
	href,
	variant = 'solid',
	size = 'md',
	color = 'primary',
	className = '',
	children,
	startIcon,
}) => {
	const sizeKeys = {
		sm: 'Small',
		md: 'Medium',
		lg: 'Large',
	};

	const variantColorKeys = {
		solid: {
			primary: 'SolidPrimary',
		},
		outlined: {
			primary: 'OutlinedPrimary',
		},
	};

	return (
		<BaseButton
			as={as}
			href={href}
			className={`
        ${classes.Button}
        ${classes[sizeKeys[size]]} 
        ${classes[variantColorKeys[variant][color]]}
        ${className}
      `}
		>
			{startIcon && <i className={`${classes.Icon} mr0p5`}>{startIcon}</i>}
			{children}
		</BaseButton>
	);
};

export default Button;
