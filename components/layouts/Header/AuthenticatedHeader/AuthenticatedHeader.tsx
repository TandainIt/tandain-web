import { FC } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import { toggleExpandSidebar } from '@/store/actions/page';

import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import MenuIcon from '@/components/icons/MenuIcon';
import UserIcon from '@/components/icons/UserIcon';
import BaseHeader from '@/components/layouts/Header/BaseHeader';

import classes from './AuthenticatedHeader.module.sass';

const AuthenticatedHeader: FC = () => {
	const dispatch = useAppDispatch();

	const toggleSidebar = () => dispatch(toggleExpandSidebar());

	return (
		<BaseHeader
			className={classes.Container}
			data-testid='authenticated-header'
		>
			<div className='col'>
				<Button
					data-testid='sidebar-toggle'
					variant='text'
					color='primary'
					startIcon={<MenuIcon />}
					className={`${classes.SidebarButton} mr2`}
					onClick={toggleSidebar}
				/>
				<Logo />
			</div>
			<Button
				data-testid='avatar'
				startIcon={<UserIcon />}
				className={classes.Avatar}
				round
			/>
		</BaseHeader>
	);
};

export default AuthenticatedHeader;
