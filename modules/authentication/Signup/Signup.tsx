import { FC } from 'react';

import Title from '../../../components/typhographies/Title';
import BaseButton from '../../../components/ui/BaseButton';
import GoogleButton from '../GoogleButton';

import { showGoogleLoginPopup } from '@/utils/auth/google';
import classes from './Signup.module.sass';
import { SingupProps } from './Signup.types';

const Signup: FC<SingupProps> = ({ className }) => (
	<section
		data-testid='signup-section'
		className={`${classes.Container} ${className}`}
	>
		<Title size='xl'>Sign Up</Title>
		<span className='mt0p25 mb4'>
			Already have an account?{' '}
			<BaseButton as='a' href='/login' className='font-semibold'>
				Login now
			</BaseButton>
		</span>
		<GoogleButton onClick={showGoogleLoginPopup}>
			Sign up with Google
		</GoogleButton>
	</section>
);

export default Signup;
