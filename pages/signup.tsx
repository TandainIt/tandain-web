import { NextPage } from 'next';
import Head from 'next/head';

import { Title } from '@/components/typhographies';
import { Button } from '@/components/ui';
import { UnauthenticatedHeader, Page } from '@/components/layouts';
import { AuthGoogleButton } from '@/modules/auth';

import classes from '@/modules/auth/AuthPage/AuthPage.module.sass';

const SignupPage: NextPage = () => (
	<>
		<Head>
			<title>Sign Up</title>
		</Head>
		<Page className={classes.AuthPage}>
			<UnauthenticatedHeader />
			<div className='px2'>
				<section className={classes.Section}>
					<Title size='lg'>Sign Up</Title>
					<span className='mt0p25 mb4'>
						Already have an account?{' '}
						<Button
							as='a'
							variant='base'
							href='/login'
							className='font-semibold'
						>
							Login now
						</Button>
					</span>
					<AuthGoogleButton>Sign up with Google</AuthGoogleButton>
				</section>
			</div>
		</Page>
	</>
);

export default SignupPage;
