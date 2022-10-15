import fetch from 'cross-fetch';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { ResponseErrorBody } from './apolloClient.types';
import { setToast } from '@/store/actions/toast';

const globalErrorWhitelists = new Set(['INVALID_TOKEN']);
let STORE: any;

export const injectStore = (_store) => {
	STORE = _store;
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach((error) => {
			/*

        NOTE: These are errors related to the server-side execution of a GraphQL operation.
        - Syntax errors (e.g., a query was malformed)
        - Validation errors (e.g., a query included a schema field that doesn't exist)
        - Resolver errors (e.g., an error occurred while attempting to populate a query field)

      */

			const { message, locations, path, extensions } = error;
			const errorBody = extensions?.responseBody as ResponseErrorBody;

			if (errorBody && !globalErrorWhitelists.has(errorBody.name)) {
				const error = {
					title: 'Something went wrong',
					message: errorBody.message,
				};

				STORE.dispatch(
					setToast({
						...error,
						variant: 'danger',
						isShow: true,
					})
				);
			} else {
				console.error(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
				);
			}
		});
	if (networkError) {
		/* 

      NOTE: These are errors encountered while attempting to communicate with your GraphQL server,
      usually resulting in a 4xx or 5xx response status code (and no data).

    */
		const error = {
			title: 'Network Error',
			message: 'Check your internet connection and try again',
		};

		STORE.dispatch(
			setToast({
				...error,
				variant: 'danger',
				isShow: true,
			})
		);
	}
});

const httpLink = new HttpLink({ uri: process.env.API_GATEWAY_HOST, fetch });

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([errorLink, httpLink]),
});

export default apolloClient;
