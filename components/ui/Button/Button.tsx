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
      primary: 'OutlinedPrimary'
    }
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
			{children}
		</BaseButton>
	);
};

export default Button;
