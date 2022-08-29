import { FC, ForwardedRef, forwardRef, useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { UserIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { useOnClickOutside } from '@/hooks';

import classes from './Avatar.module.sass';
import {
	AvatarButtonProps,
	AvatarMenuProps,
	AvatarProps,
} from './Avatar.types';

const AvatarMenu: FC<AvatarMenuProps> = forwardRef(
	({ className }, ref: ForwardedRef<HTMLDivElement>) => (
		<div
			ref={ref}
			id='avatar-menu'
			data-testid='avatar-menu'
			className={clsx(classes.AvatarMenu, className)}
		>
			<div className={classes.TopPanel}>
				<span data-testid='name' className={classes.Name}>
					Peitra Erdi
				</span>
				<span data-testid='email' className={classes.Email}>
					example@example.com
				</span>
			</div>
			<hr className={clsx(classes.Separator, 'my0p75')} />
			<div className={classes.BottomPanel}>
				<Button as='a' href='/about' variant='text' className={classes.Button}>
					About
				</Button>
				<Button variant='text' className={classes.Button}>
					Logout
				</Button>
			</div>
		</div>
	)
);

const AvatarButton: FC<AvatarButtonProps> = forwardRef(
	({ src, onClick }, ref: ForwardedRef<HTMLButtonElement>) => (
		<Button
			ref={ref}
			data-testid='avatar-button'
			className={clsx(classes.AvatarButton, 'p0')}
			onClick={onClick}
			round
		>
			{src ? (
				<Image
					data-testid='avatar-img'
					src={src}
					alt='Avatar'
					className={classes.Img}
					layout='fill'
				/>
			) : (
				<UserIcon />
			)}
		</Button>
	)
);

const useAvatar = () => {
	const buttonRef = useRef(null);
	const menuRef = useRef(null);
	const [showMenu, setShowMenu] = useState(false);

	const toggleShowMenu = () => setShowMenu(!showMenu);

	useOnClickOutside(menuRef, (e: Event) => {
		/**
		 * Hide Avatar Menu if user click outside of it
		 */

		if (buttonRef.current.contains(e.target)) return;

		setShowMenu(false);
	});

	return {
		buttonRef,
		menuRef,
		showMenu,
		toggleShowMenu,
	};
};

const Avatar: FC<AvatarProps> = ({ menuClassName, ...rest }) => {
	const { buttonRef, menuRef, showMenu, toggleShowMenu } = useAvatar();

	return (
		<>
			<AvatarButton ref={buttonRef} onClick={toggleShowMenu} {...rest} />
			{showMenu && <AvatarMenu ref={menuRef} className={menuClassName} />}
		</>
	);
};

AvatarButton.displayName = 'AvatarButton';
AvatarMenu.displayName = 'AvatarMenu';

export default Avatar;
