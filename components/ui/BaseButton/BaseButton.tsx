import Link from 'next/link';
import { FC } from 'react';

import { BaseButtonProps } from './BaseButton.types';

import classes from './BaseButton.module.scss';

const BaseButton: FC<BaseButtonProps> = ({
	as = 'button',
	href,
	children,
  className = '',
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
		<button className={`${className} ${classes.BaseButton}`} {...rest}>
			{children}
		</button>
	);
};

export default BaseButton;
