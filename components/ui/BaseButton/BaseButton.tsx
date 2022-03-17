import Link, { LinkProps } from 'next/link';
import { FC, createElement } from 'react';

import { BaseButtonProps } from './BaseButton.types';

import classes from './BaseButton.module.scss';

const BaseButton: FC<BaseButtonProps> = ({
	as = 'button',
	href,
	children,
  className,
	...rest
}) => {
	// return createElement(href ? Link : 'button', { ...rest }, children);

	if (as === 'a' && href) {
		return (
			<Link href={href} passHref>
				<a className={` ${className} ${classes.BaseLink}`}>{children}</a>
			</Link>
		);
	}

	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
};

export default BaseButton;
