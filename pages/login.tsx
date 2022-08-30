import { NextPage } from 'next';
import Head from 'next/head';

import { Title } from '@/components/typhographies';
import { Button } from '@/components/ui';
import { UnauthenticatedHeader, Page } from '@/components/layouts';
import { AuthGoogleButton } from '@/modules/auth';
import { showGoogleLoginPopup } from '@/modules/auth/utils';

import classes from '@/modules/auth/AuthPage/AuthPage.module.sass';

const LoginPage: NextPage = () => (
	<>
		<Head>
			<title>Login</title>
		</Head>
		<Page className={classes.AuthPage}>
			<UnauthenticatedHeader />
			<main className={classes.Main}>
				<section className={classes.Section}>
					<Title size='lg'>Login</Title>
					<span className='mt0p25 mb4'>
						Don&apos;t have an account?&nbsp;
						<Button
							as='a'
							variant='base'
							href='/signup'
							className='font-semibold'
						>
							Sign up now
						</Button>
					</span>
					<AuthGoogleButton onClick={showGoogleLoginPopup}>
						Login with Google
					</AuthGoogleButton>
				</section>
			</main>
		</Page>
	</>
);

export default LoginPage;
