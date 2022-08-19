import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Page from '../components/layouts/Page';
import { UnauthenticatedHeader } from '../components/layouts/Header';
import Signup from '../modules/authentication/Signup';
import classes from '../styles/pages/AuthPage.module.sass';

import { RootState } from '@/store';
import useAppSelector from '@/hooks/useAppSelector';
import Spinner from '@/components/ui/Spinner';

const SignupPage: NextPage = () => {
	const router = useRouter();
	const { credentials, isLoading } = useAppSelector(
		(state: RootState) => state.auth
	);

	if (credentials.idToken) {
		router.replace('/mylist');
		return;
	}

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<Page className={classes.Page}>
				<UnauthenticatedHeader />
				<main className={classes.Main}>
					{isLoading ? <Spinner className={classes.Spinner} /> : <Signup />}
				</main>
			</Page>
		</>
	);
};

export default SignupPage;
