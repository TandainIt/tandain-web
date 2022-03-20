import { FC } from 'react';
import GoogleIcon from '../../../components/icons/GoogleIcon';
import Title from '../../../components/typhographies/Title';
import BaseButton from '../../../components/ui/BaseButton';

import Button from '../../../components/ui/Button';
import GoogleButton from '../GoogleButton';

import classes from './Signup.module.scss';
import { SingupProps } from './Signup.types';

const Signup: FC<SingupProps> = ({ className }) => (
	<section
		data-testid='signup-section'
		className={`${classes.Container} ${className}`}
	>
		<Title size='lg'>Sign Up</Title>
		<span className='mt0p25 mb3'>
			Already have an account?{' '}
			<BaseButton as='a' href='/login' className='font-semibold'>
				Login now
			</BaseButton>
		</span>
		<GoogleButton>Sign up with Google</GoogleButton>
	</section>
);

export default Signup;
