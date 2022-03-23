import { NextPage } from 'next';
import Head from 'next/head';
import { AuthenticatedHeader } from '../components/layouts/Header';
import Page from '../components/layouts/Page';

const MyListPage: NextPage = () => (
	<>
		<Head>
			<title>My List</title>
		</Head>
		<Page>
			<AuthenticatedHeader />
		</Page>
	</>
);

export default MyListPage;
