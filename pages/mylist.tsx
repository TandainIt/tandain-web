import { NextPage } from 'next';
import Head from 'next/head';

import { AuthenticatedHeader } from '../components/layouts/Header';
import Page from '../components/layouts/Page';
import Sidebar from '../components/layouts/Sidebar';

const MyListPage: NextPage = () => (
	<>
		<Head>
			<title>My List</title>
		</Head>
		<Page className='col'>
			<Sidebar />
			<div className='w-full'>
				<AuthenticatedHeader />
			</div>
		</Page>
	</>
);

export default MyListPage;
