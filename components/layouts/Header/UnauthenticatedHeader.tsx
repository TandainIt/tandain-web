import { FC } from 'react';

import BaseHader from './BaseHeader';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo';

import classes from './UnauthenticatedHeader.module.scss';

export const UnauthenticatedHeader: FC = () => (
	<BaseHader data-testid='unauthenticated-header' className={classes.Container}>
		<Logo />
		<div>
			<Button variant='outlined' className='mr-16' as='a' href='/login'>
				Login
			</Button>
			<Button as='a' href='/signup'>
				Get Started
			</Button>
		</div>
	</BaseHader>
);

export default UnauthenticatedHeader;
