import { NextPage } from 'next';
import Head from 'next/head';

import { UnauthenticatedHeader, Page } from '@/components/layouts';
import Login from '../modules/authentication/Login';

import classes from '../styles/pages/AuthPage.module.sass';

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
