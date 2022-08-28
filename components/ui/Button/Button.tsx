import { FC, forwardRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { sizes as buttonSizes } from '@/utils/variables';
import { capitalize } from '@/utils/string';

import classes from './Button.module.sass';
import { ButtonProps, BaseButtonProps } from './Button.types';

const BaseButton: FC<BaseButtonProps> = forwardRef(
	({ as = 'button', href, children, className, ...rest }, ref) =>
		as === 'a' && href ? (
			<Link href={href} passHref>
				<a className={className}>{children}</a>
			</Link>
		) : (
			<button ref={ref} className={className} {...rest}>
				{children}
			</button>
		)
);

const Button: FC<ButtonProps> = forwardRef(
	(
		{
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
		},
		ref
	) => {
		return (
			<BaseButton
				ref={ref}
				as={as}
				href={href}
				className={clsx(
					className,
					classes[capitalize(variant)],
					classes[capitalize(color)],
					variant !== 'base' && classes[buttonSizes[size]],
					round && classes.Round,
					!children && classes.IconOnly
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
	}
);

BaseButton.displayName = 'BaseButton';
Button.displayName = 'Button';

export default Button;
