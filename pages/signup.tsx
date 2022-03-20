import { NextPage } from 'next';
import Head from 'next/head';

import Page from '../components/layouts/Page';
import UnauthenticatedHeader from '../components/layouts/Header';
import Signup from '../modules/authentication/Signup';

import classes from '../styles/pages/AuthPage.module.scss';

const SignupPage: NextPage = () => (
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

export default SignupPage;
