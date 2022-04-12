import { FC, useRef, useState } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { toggleExpandSidebar } from '@/store/actions/page';

import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import MenuIcon from '@/components/icons/MenuIcon';
import UserIcon from '@/components/icons/UserIcon';
import BaseHeader from '@/components/layouts/Header/BaseHeader';
import AvatarMenu from '@/components/layouts/AvatarMenu';

import classes from './AuthenticatedHeader.module.sass';

const AuthenticatedHeader: FC = () => {
	const dispatch = useAppDispatch();
	const avatarRef = useRef(null);
	const avatarMenuRef = useRef(null);

	const [showAvatarMenu, setShowAvatarMenu] = useState(false);

	const toggleSidebar = () => dispatch(toggleExpandSidebar());

	const toggleShowAvatarMenu = () => setShowAvatarMenu(!showAvatarMenu);

	const handleCloseAvatarMenu = (e: Event) => {
		if (avatarRef.current.contains(e.target)) return;

		setShowAvatarMenu(false);
	};

	useOnClickOutside(avatarMenuRef, handleCloseAvatarMenu);

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
				ref={avatarRef}
				data-testid='avatar'
				startIcon={<UserIcon />}
				className={classes.Avatar}
				onClick={toggleShowAvatarMenu}
				round
			></Button>
			{showAvatarMenu && (
				<AvatarMenu ref={avatarMenuRef} className={classes.AvatarMenu} />
			)}
		</BaseHeader>
	);
};

export default AuthenticatedHeader;
