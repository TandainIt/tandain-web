import { NextPage } from 'next';
import Head from 'next/head';

import { UnauthenticatedHeader, Page } from '@/components/layouts';
import Signup from '../modules/authentication/Signup';

import classes from '../styles/pages/AuthPage.module.sass';

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
