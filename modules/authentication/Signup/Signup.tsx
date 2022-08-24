import { FC } from 'react';

import { Title } from '@/components/typhographies';
import { Button } from '@/components/ui';
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
			<Button as='a' variant='base' href='/login' className='font-semibold'>
				Login now
			</Button>
		</span>
		<GoogleButton>Sign up with Google</GoogleButton>
	</section>
);

export default Signup;
