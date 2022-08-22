import { NextPage } from 'next';
import Head from 'next/head';
import clsx from 'clsx';

import { AuthenticatedHeader, Page, Sidebar } from '@/components/layouts';
import Title from '@/components/typhographies/Title';
import ListItem from '@/modules/mylist/ListItem';

import classes from '@/styles/pages/MyList.module.sass';

const MyListPage: NextPage = () => {
	const myList = [
		{
			id: 'title-1',
			title: 'Title 1',
			sourceName: 'Source Name 1',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-2',
			title: 'Title 2',
			sourceName: 'Source Name 2',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-3',
			title: 'Title 3',
			sourceName: 'Source Name 3',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-4',
			title: 'Title 4',
			sourceName: 'Source Name 4',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-5',
			title: 'Title 5',
			sourceName: 'Source Name 5',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-6',
			title: 'Title 6',
			sourceName: 'Source Name 6',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-7',
			title: 'Title 7',
			sourceName: 'Source Name 7',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
		{
			id: 'title-8',
			title: 'Title 8',
			sourceName: 'Source Name 8',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		},
	];

	return (
		<>
			<Head>
				<title>My List</title>
			</Head>
			<Page className='col'>
				<Sidebar />
				<div className='w-full'>
					<AuthenticatedHeader />
					<ol data-testid='list' className={clsx(classes.List, 'mt4 mb5')}>
						<Title className={clsx(classes.Title)}>My List</Title>
						{myList.map((item) => (
							<ListItem
								key={item.id}
								title={item.title}
								sourceName={item.sourceName}
								sourceURL={item.sourceURL}
								imgURL={item.imgURL}
								onDelete={() => {}}
							/>
						))}
					</ol>
				</div>
			</Page>
		</>
	);
};

export default MyListPage;
