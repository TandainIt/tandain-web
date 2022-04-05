import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { toggleExpandSidebar } from '@/store/actions/page';
import pageSelector from '@/store/selectors/page';

import ListIcon from '@/components/icons/ListIcon';
import MenuIcon from '@/components/icons/MenuIcon';
import Backdrop from '@/components/ui/Backdrop';
import Button from '@/components/ui/Button';
import NavItem from './NavItem';

import classes from './Sidebar.module.sass';

const Sidebar: FC = () => {
	const { pathname } = useRouter();
	const dispatch = useAppDispatch();

	const { isSidebarExpanded } = useAppSelector(pageSelector);

	const toggleSidebar = () => dispatch(toggleExpandSidebar());

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
					<NavItem
						startIcon={<ListIcon />}
						href='/mylist'
						className='mx0p25'
						isExpanded={isSidebarExpanded}
						isActive={pathname === '/mylist'}
					>
						My List
					</NavItem>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
