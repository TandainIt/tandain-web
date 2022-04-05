import { FC } from 'react';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import BaseHeader from '@/components/layouts/Header/BaseHeader';

import classes from './UnauthenticatedHeader.module.scss';

export const UnauthenticatedHeader: FC = () => (
	<BaseHeader
		data-testid='unauthenticated-header'
		className={classes.Container}
	>
		<Logo />
		<div>
			<Button variant='outlined' className='mr-16' as='a' href='/login'>
				Login
			</Button>
			<Button as='a' href='/signup'>
				Get Started
			</Button>
		</div>
	</BaseHeader>
);

export default UnauthenticatedHeader;
