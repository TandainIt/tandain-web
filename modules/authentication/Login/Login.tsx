import { FC } from 'react';

import { Title } from '@/components/typhographies';
import BaseButton from '../../../components/ui/BaseButton';
import GoogleButton from '../GoogleButton';

import classes from './Login.module.sass';

import { LoginProps } from './Login.types';

const Login: FC<LoginProps> = ({ className }) => (
	<section
		data-testid='login-section'
		className={`${classes.Container} ${className}`}
	>
		<Title size='lg'>Login</Title>
		<span className='mt0p25 mb4'>
			Don&apos;t have an account?&nbsp;
			<BaseButton as='a' href='/signup' className='font-semibold'>
				Sign up now
			</BaseButton>
		</span>
		<GoogleButton>Login with Google</GoogleButton>
	</section>
);

export default Login;
