import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';

import apolloClient from '@/graphql/apolloClient';
import store from '@/store';
import pageSelector from '@/store/selectors/page';
import { setToastError, toggleExpandSidebar } from '@/store/actions/page';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import Toast from '@/components/ui/Toast';
import Footer from '@/components/layouts/Footer';

import classes from '@/styles/pages/App.module.sass';
import '@/styles/index.sass';

function MyComponent({ children }) {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { error } = useAppSelector(pageSelector);

	function hideToast() {
		dispatch(setToastError(undefined));
	}

	useEffect(() => {
		if (window.innerWidth > 1274) {
			/**
			 * Expand sidebar at large screen
			 */

			dispatch(toggleExpandSidebar());
		}
	}, []); // eslint-disable-line

	useEffect(() => {
		/**
		 * Hide Toast whenever route is change
		 */

		if (error) hideToast();
	}, [router.asPath]); // eslint-disable-line

	return (
		<>
			{children}
			{!!error && (
				<Toast
					className={classes.Toast}
					title={error.title}
					description={error.message}
					onClose={hideToast}
				/>
			)}
			<Footer />
		</>
	);
}

export function ReduxProvider({ children }) {
	return (
		<Provider store={store}>
			<MyComponent>{children}</MyComponent>
		</Provider>
	);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<ReduxProvider>
				<Component {...pageProps} />
			</ReduxProvider>
		</ApolloProvider>
	);
}

export default MyApp;
