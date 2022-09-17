import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { useAuth } from '@/modules/auth/hooks';
import { GET_ARTICLE_LIST } from '@/modules/article/graphql/article.query';

const useMyListPage = () => {
	const [showAddInspirationForm, setShowAddInspirationForm] = useState(false);

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

	function toggleShowAddInspirationForm() {
		setShowAddInspirationForm(!showAddInspirationForm);
	}

	return {
		list: data?.articles || [],
		showAddInspirationForm,
		isLoading: data === undefined,
		toggleShowAddInspirationForm,
	};
};

export default useMyListPage;
