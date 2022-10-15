import { FormEvent, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import { useAuth } from '@/modules/auth/hooks';
import {
	ADD_ARTICLE,
	GET_ARTICLE_LIST,
} from '@/modules/article/graphql/article.query';
import { isValidURL } from '@/utils/global';

const useMyListPage = () => {
	const [showAddArticleForm, setShowAddArticleForm] = useState(false);
	const [articleValidationError, setArticleValidationError] =
		useState<string>(undefined);

	const { idToken } = useAuth();

	const [getArticleList, { data }] = useLazyQuery(GET_ARTICLE_LIST, {
		context: {
			headers: {
				authorization: `Bearer ${idToken}`,
			},
		},
		fetchPolicy: 'network-only',
		/**
      Setting fetchPolicy to network-only is to executes the full query against your GraphQL server,
      without first checking the cache. 
    */
	});

	const [addArticle, { loading: isAddArticleLoading }] = useMutation(
		ADD_ARTICLE,
		{
			context: {
				headers: {
					authorization: `Bearer ${idToken}`,
				},
			},
		}
	);

	useEffect(() => {
		if (idToken) {
			getArticleList({ variables: { limit: 9 } });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idToken]);

	function toggleShowAddArticleForm() {
		setShowAddArticleForm(!showAddArticleForm);

		if (articleValidationError) {
			setArticleValidationError(undefined);
		}
	}

	async function onSubmitNewArticle(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const url = e.target[0].value;

		if (!isValidURL(url)) {
			setArticleValidationError('Oops, it is not a valid URL');
			return;
		}

		await addArticle({ variables: { url } });
		await getArticleList({ variables: { limit: 9 } });
		setShowAddArticleForm(false);
	}

	return {
		list: data?.articles || [],
		isLoading: data === undefined,
		isAddArticleLoading,
		showAddArticleForm,
		articleValidationError,
		toggleShowAddArticleForm,
		onSubmitNewArticle,
	};
};

export default useMyListPage;
