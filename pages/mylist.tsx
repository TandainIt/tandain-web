import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';

import { AuthenticatedHeader, Page, Sidebar } from '@/components/layouts';
import { Title } from '@/components/typhographies';
import { Button, Spinner } from '@/components/ui';
import { ArticleListItem } from '@/modules/article';

import classes from '@/modules/article/MyListPage/MyListPage.module.sass';
import EmptyListSVG from '@/public/illustration/empty-list.svg';

const useMyListPage = () => {
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

	return { isLoading: true, list: [] };
};

const EmptyList = () => (
	<div className={classes.EmptyList}>
		<Image src={EmptyListSVG} alt='List is empty' />
		<div>
			<Title as='h3' className={classes.EmptyListTitle}>
				Your list is empty
			</Title>
			<p className={classes.EmptyListParagraph}>
				Looks like you haven’t saved anything to your list. Start to{' '}
				<Button variant='base'>add inspiration.</Button>
			</p>
		</div>
	</div>
);

const MyListPage: NextPage = () => {
	const { isLoading, list } = useMyListPage();

	return (
		<>
			<Head>
				<title>My List</title>
			</Head>
			<Page className='inline-flex'>
				<Sidebar />
				<div className='w-full flex flex-col'>
					<AuthenticatedHeader />
					<main>
						<ol data-testid='list' className={clsx(classes.List, 'mt4 mb5')}>
							<Title className={classes.Title}>My List</Title>
							{isLoading ? (
								<Spinner className='absolute-centered' />
							) : !list.length ? (
								<EmptyList />
							) : (
								list.map((item) => (
									<ArticleListItem
										key={item.id}
										title={item.title}
										sourceName={item.sourceName}
										sourceURL={item.sourceURL}
										imgURL={item.imgURL}
										onDelete={() => {}}
									/>
								))
							)}
						</ol>
					</main>
				</div>
			</Page>
		</>
	);
};

export default MyListPage;
