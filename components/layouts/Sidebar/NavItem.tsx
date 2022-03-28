import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Button from '../../ui/Button';
import Tooltip from '../../ui/Tooltip';

import classes from './NavItem.module.sass';

import { NavItemProps } from './NavItem.types';

const NavItem: FC<NavItemProps> = ({
	startIcon,
	children,
	href = '/',
	className = '',
	isActive,
	isExpanded,
}) => (
	<Link href={href} passHref>
		<a>
			<div
				className={clsx(
					classes.NavItem,
					isActive && classes.Active,
					isExpanded && classes.Expanded,
					className
				)}
			>
				<Tooltip text={children} className={classes.Tooltip}>
					<Button
						id='nav-item-button'
						variant='text'
						color='primary'
						startIcon={startIcon}
						className={classes.Button}
					/>
				</Tooltip>
				<label
					data-testid='nav-item-label'
					htmlFor='nav-item-button'
					className={classes.Label}
				>
					{children}
				</label>
			</div>
		</a>
	</Link>
);

export default NavItem;
