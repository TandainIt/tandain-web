import { FC } from 'react';

import BaseButton from '../BaseButton/BaseButton';

import { ButtonProps } from './';

import { sizes as buttonSizes, variants as buttonVariants } from '../../../utils/variables';

import classes from './Button.module.scss';

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
}) => {
	return (
		<BaseButton
			as={as}
			href={href}
			className={`
        ${classes.Button}
        ${classes[buttonSizes[size]]} 
        ${classes[buttonVariants[variant][color]]}
        ${round && classes.Round}
        ${!children ? classes.IconOnly : ''}
        ${className}
      `}
		>
			{startIcon && (
				<i className={`${classes.Icon} ${children && 'mr0p5'}`}>{startIcon}</i>
			)}
			{children}
		</BaseButton>
	);
};

export default Button;
