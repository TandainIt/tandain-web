import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { RootState } from '@/store';
// import Spinner from '@/components/ui/Spinner';

import { showGoogleLoginPopup } from '@/utils/auth/google';
import { Title } from '@/components/typhographies';
import { Button } from '@/components/ui';
import { Page, UnauthenticatedHeader } from '@/components/layouts';
import { AuthGoogleButton } from '@/modules/auth';

import classes from '@/modules/auth/AuthPage/AuthPage.module.sass';
import { useAppSelector } from '@/hooks';

const useSignUpPage = () => {
	const router = useRouter();
	const { credentials, isLoading } = useAppSelector(
		(state: RootState) => state.auth
	);

	if (credentials.idToken) {
		router.replace('/mylist');
		return;
	}
};

const SignupPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<Page className={classes.AuthPage}>
				<UnauthenticatedHeader />
				<main className={classes.Main}>
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
				</main>
			</Page>
		</>
	);
};

export default SignupPage;
