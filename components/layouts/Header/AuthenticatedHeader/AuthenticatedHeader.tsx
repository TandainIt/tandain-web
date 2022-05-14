import { FC, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

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
  let windowWidth = 0

	const [showAvatarMenu, setShowAvatarMenu] = useState(false);

  if (typeof window !== "undefined") {
    windowWidth = window.innerWidth;
  }

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
				<Logo isFull={windowWidth > 1024}/>
			</div>
			<Button
				ref={avatarRef}
				data-testid='avatar'
				// startIcon={<UserIcon />}
				className={clsx(classes.Avatar, 'p0')}
				onClick={toggleShowAvatarMenu}
				round
			>
				<Image
					src='/temp/my-list-item-img.png'
					alt='Profile'
					className={classes.AvatarImg}
					width={40}
					height={40}
					layout='intrinsic'
				/>
			</Button>
			{showAvatarMenu && (
				<AvatarMenu ref={avatarMenuRef} className={classes.AvatarMenu} />
			)}
		</BaseHeader>
	);
};

export default AuthenticatedHeader;
