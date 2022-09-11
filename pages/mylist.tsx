import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';
import { useLazyQuery } from '@apollo/client';

import { AuthenticatedHeader, Page, Sidebar } from '@/components/layouts';
import { Title } from '@/components/typhographies';
import { Button, Spinner } from '@/components/ui';
import { ArticleListItem } from '@/modules/article';
import { useAuth } from '@/modules/auth/hooks';
import { GET_ARTICLE_LIST } from '@/modules/article/graphql/article.query';

import classes from '@/modules/article/MyListPage/MyListPage.module.sass';
import EmptyListSVG from '@/public/illustration/empty-list.svg';

export const useMyListPage = () => {
	const { idToken } = useAuth();
	const [getArticleList, { data }] = useLazyQuery(GET_ARTICLE_LIST, {
		context: {
			headers: {
				authorization: `Bearer ${idToken}`,
			},
		},
	});

	useEffect(() => {
		if (idToken) {
			getArticleList({ variables: { limit: 9 } });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idToken]);

	return { isLoading: data === undefined, list: data?.articles };
};

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
							<Title data-testid='list-title' className={classes.Title}>
								My List
							</Title>
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
