import { NextPage } from 'next';
import Head from 'next/head'

import UnauthenticatedHeader from '../components/layouts/Header';
import { Page } from '../components/layouts/Page';

const Login: NextPage = () => (
	<>
    <Head>
      <title>Login</title>
    </Head>
		<Page>
			<UnauthenticatedHeader />
		</Page>
	</>
);

export default Login;
