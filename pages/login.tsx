import { NextPage } from 'next';
import Head from 'next/head';

import { UnauthenticatedHeader } from '../components/layouts/Header';
import Page from '../components/layouts/Page';
import Login from '../modules/authentication/Login';

import classes from '../styles/pages/AuthPage.module.sass';

const LoginPage: NextPage = () => (
	<>
		<Head>
			<title>Login</title>
		</Head>
		<Page className={classes.Page}>
			<UnauthenticatedHeader />
			<main className={classes.Main}>
				<Login />
			</main>
		</Page>
	</>
);

export default LoginPage;
