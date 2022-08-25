import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { toggleExpandSidebar } from '@/store/actions/page';
import pageSelector from '@/store/selectors/page';

import { ListIcon, MenuIcon } from '@/components/icons';
import { Backdrop, Button, Tooltip } from '@/components/ui';

import classes from './Sidebar.module.sass';
import { SidebarNavItemProps } from './Sidebar.types';

const SidebarNavItem: FC<SidebarNavItemProps> = ({
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
					classes.SidebarNavItem,
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

export const useSidebar = () => {
	const { pathname } = useRouter();
	const dispatch = useAppDispatch();

	const { isSidebarExpanded } = useAppSelector(pageSelector);

	const toggleSidebar = () => dispatch(toggleExpandSidebar());

	return { pathname, isSidebarExpanded, toggleSidebar };
};

const Sidebar: FC = () => {
	const { pathname, isSidebarExpanded, toggleSidebar } = useSidebar();

	return (
		<>
			<Backdrop
				data-testid='sidebar-backdrop'
				onClick={toggleSidebar}
				className={clsx(classes.Backdrop, isSidebarExpanded && classes.Show)}
			/>
			<div
				data-testid='sidebar'
				className={clsx(classes.Sidebar, isSidebarExpanded && classes.Expanded)}
			>
				<Button
					data-testid='sidebar-menu'
					variant='text'
					color='primary'
					startIcon={<MenuIcon />}
					onClick={toggleSidebar}
				/>
				<nav className={classes.NavList}>
					<SidebarNavItem
						startIcon={<ListIcon />}
						href='/mylist'
						className='my0p25'
						isExpanded={isSidebarExpanded}
						isActive={pathname === '/mylist'}
					>
						My List
					</SidebarNavItem>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
