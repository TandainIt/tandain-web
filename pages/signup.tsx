import { NextPage } from 'next';
import Head from 'next/head';

import { AuthGoogleButton } from '@/modules/auth';
import { showGoogleLoginPopup } from '@/modules/auth/utils';
import { Title } from '@/components/typhographies';
import { Button, Spinner } from '@/components/ui';
import { Page, UnauthenticatedHeader } from '@/components/layouts';
import { useAuth } from '@/modules/auth/hooks';

import classes from '@/modules/auth/AuthPage/AuthPage.module.sass';

const SignupPage = () => {
	const { isLoading } = useAuth('/mylist');

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<Page className={classes.AuthPage}>
				<UnauthenticatedHeader />
				<main className={classes.Main}>
					{isLoading ? (
						<Spinner className={classes.Spinner} />
					) : (
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
							<AuthGoogleButton onClick={showGoogleLoginPopup}>
								Sign up with Google
							</AuthGoogleButton>
						</section>
					)}
				</main>
			</Page>
		</>
	);
};

export default SignupPage;
