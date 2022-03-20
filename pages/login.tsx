import { NextPage } from 'next';
import Head from 'next/head';

import UnauthenticatedHeader from '../components/layouts/Header';
import Page from '../components/layouts/Page';

import Login from '../modules/authentication/Login';

import classes from '../styles/pages/AuthPage.module.scss';

const LoginPage: NextPage = () => (
	<>
		<Head>
			<title>Login</title>
		</Head>
		<Page className={classes.AuthPage}>
			<UnauthenticatedHeader />
			<div className='px2'>
				<Login className={classes.AuthSection} />
			</div>
		</Page>
	</>
);

export default LoginPage;
