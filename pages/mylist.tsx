import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';

import { AuthenticatedHeader, Page, Sidebar } from '@/components/layouts';
import { Title } from '@/components/typhographies';
import { Button, Spinner } from '@/components/ui';
import {
	ArticleListItem,
	MyListHeader,
	useMyListPage,
} from '@/modules/article';

import classes from '@/modules/article/MyListPage/MyListPage.module.sass';
import EmptyListSVG from '@/public/illustration/empty-list.svg';

const EmptyList = () => (
	<div className={classes.EmptyList} data-testid='empty-list'>
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

const MyListPage = () => {
	const {
		list,
		showAddInspirationForm,
		isLoading,
		toggleShowAddInspirationForm,
	} = useMyListPage();

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
							<MyListHeader
								showForm={showAddInspirationForm}
								className={classes.MyListHeader}
								toggleShowForm={toggleShowAddInspirationForm}
							/>
							{isLoading ? (
								<Spinner className='absolute-centered' />
							) : !list.length ? (
								<EmptyList />
							) : (
								list.map((item) => (
									<ArticleListItem
										data-testid='article-list-item'
										key={item.id}
										title={item.title}
										sourceName={item.sourceName}
										sourceURL={item.sourceUrl}
										imgURL={item.image}
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
