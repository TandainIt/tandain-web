import { FC, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import useAppDispatch from '@/hooks/useAppDispatch';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { toggleExpandSidebar } from '@/store/actions/page';

import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { MenuIcon, UserIcon } from '@/components/icons';
import AvatarMenu from '@/components/ui/AvatarMenu';

import classes from './Header.module.sass';

export const useAuthenticatedHeader = () => {
	const dispatch = useAppDispatch();
	const avatarRef = useRef(null);
	const avatarMenuRef = useRef(null);
	let windowWidth = 0;

	const [showAvatarMenu, setShowAvatarMenu] = useState(false);

	if (typeof window !== 'undefined') {
		windowWidth = window.innerWidth;
	}

	const toggleShowAvatarMenu = () => setShowAvatarMenu(!showAvatarMenu);

	useOnClickOutside(avatarMenuRef, (e: Event) => {
    /**
     * Hide Avatar Menu if user click outside of it
     */

		if (avatarRef.current.contains(e.target)) return;

		setShowAvatarMenu(false);
	});

	return {
		dispatch,
		windowWidth,
		avatarRef,
		toggleShowAvatarMenu,
		showAvatarMenu,
		avatarMenuRef,
	};
};

export const AuthenticatedHeader: FC = () => {
	const {
		dispatch,
		windowWidth,
		avatarRef,
		toggleShowAvatarMenu,
		showAvatarMenu,
		avatarMenuRef,
	} = useAuthenticatedHeader();

	return (
		<header className={classes.Header} data-testid='authenticated-header'>
			<div className='col'>
				<Button
					data-testid='sidebar-toggle'
					variant='text'
					color='primary'
					startIcon={<MenuIcon />}
					className={clsx(classes.SidebarButton, 'mr2')}
					onClick={() => dispatch(toggleExpandSidebar())}
				/>
				<Logo isFull={windowWidth > 1024} data-testid='logo' />
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
		</header>
	);
};

export const UnauthenticatedHeader: FC = () => (
	<header
		data-testid='unauthenticated-header'
		className={clsx(classes.Header, 'items-center')}
	>
		<Logo />
		<div>
			<Button variant='outlined' className='mr1' as='a' href='/login'>
				Login
			</Button>
			<Button as='a' href='/signup'>
				Get Started
			</Button>
		</div>
	</header>
);
