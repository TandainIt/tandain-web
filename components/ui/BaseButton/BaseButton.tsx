import Link from 'next/link';
import { FC, forwardRef } from 'react';

import { BaseButtonProps } from './BaseButton.types';

import classes from './BaseButton.module.sass';

const BaseButton: FC<BaseButtonProps> = forwardRef(
	({ as = 'button', href, children, className = '', ...rest }, ref) => {
    
		// return createElement(href ? Link : 'button', { ...rest }, children);

		if (as === 'a' && href) {
      // TODO:  Add ref
			return (
				<Link href={href} passHref>
					<a className={` ${className} ${classes.BaseLink}`}>
						{children}
					</a>
				</Link>
			);
		}

		return (
			<button
				ref={ref}
				className={`${className} ${classes.BaseButton}`}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
