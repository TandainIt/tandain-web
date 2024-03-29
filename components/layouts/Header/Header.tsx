import { FC } from 'react';
import clsx from 'clsx';

import { useAppDispatch } from '@/hooks';
import { toggleExpandSidebar } from '@/store/actions/page';

import { Avatar, Button, Logo } from '@/components/ui';
import { MenuIcon } from '@/components/icons';

import classes from './Header.module.sass';
import { HeaderProps } from './Header.types';

export const useAuthenticatedHeader = () => {
	const dispatch = useAppDispatch();
	let windowWidth = 0;

	if (typeof window !== 'undefined') {
		windowWidth = window.innerWidth;
	}

	return {
		dispatch,
		windowWidth,
	};
};

export const AuthenticatedHeader: FC<HeaderProps> = ({ ...rest }) => {
	const { dispatch, windowWidth } = useAuthenticatedHeader();

	return (
		<header
			className={classes.Header}
			data-testid='authenticated-header'
			{...rest}
		>
			<div className='inline-flex'>
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
			<Avatar
				src='/temp/my-list-item-img.png'
				menuClassName={classes.AvatarMenu}
			/>
		</header>
	);
};

export const UnauthenticatedHeader: FC<HeaderProps> = ({
	className,
	...rest
}) => (
	<header
		data-testid='unauthenticated-header'
		className={clsx(classes.Header, 'items-center', className)}
		{...rest}
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
