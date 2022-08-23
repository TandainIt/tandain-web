import { FC } from 'react';

import { Title } from '@/components/typhographies';
import BaseButton from '../../../components/ui/BaseButton';
import GoogleButton from '../GoogleButton';

import classes from './Signup.module.sass';
import { SingupProps } from './Signup.types';

const Signup: FC<SingupProps> = ({ className }) => (
	<section
		data-testid='signup-section'
		className={`${classes.Container} ${className}`}
	>
		<Title size='lg'>Sign Up</Title>
		<span className='mt0p25 mb4'>
			Already have an account?{' '}
			<BaseButton as='a' href='/login' className='font-semibold'>
				Login now
			</BaseButton>
		</span>
		<GoogleButton>Sign up with Google</GoogleButton>
	</section>
);

export default Signup;
