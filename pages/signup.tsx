import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Page from '../components/layouts/Page';
import { UnauthenticatedHeader } from '../components/layouts/Header';
import Signup from '../modules/authentication/Signup';
import classes from '../styles/pages/AuthPage.module.sass';

import { RootState } from '@/store';
import useAppSelector from '@/hooks/useAppSelector';

const SignupPage: NextPage = () => {
	const router = useRouter();
	const { credentials } = useAppSelector((state: RootState) => state.auth);

	if (credentials.idToken) router.replace('/mylist');

	return (
		<>
			<Head>
				<title>Sign Up</title>
			</Head>
			<Page className={classes.AuthPage}>
				<UnauthenticatedHeader />
				<div className='px2'>
					<Signup className={classes.AuthSection} />
				</div>
			</Page>
		</>
	);
};

export default SignupPage;
