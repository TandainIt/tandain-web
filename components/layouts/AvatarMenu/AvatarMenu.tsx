import { FC, ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import Button from '@/components/ui/Button';

import classes from './AvatarMenu.module.sass';
import { AvatarMenuProps } from './AvatarMenu.types';

const AvatarMenu: FC<AvatarMenuProps> = forwardRef(
	({ className }, ref: ForwardedRef<HTMLDivElement>) => (
		<div ref={ref} data-testid="avatar-menu" className={clsx(classes.AvatarMenu, className)}>
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

AvatarMenu.displayName = 'AvatarMenu';

export default AvatarMenu;
