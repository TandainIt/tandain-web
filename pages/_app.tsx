import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import store from '../store';
import { useAppDispatch } from '@/hooks';
import { toggleExpandSidebar } from '../store/actions/page';

import { Footer } from '@/components/layouts';

import '../styles/index.sass';

function MyComponent({ children }) {
	// NOTE: Configuring globally at first render

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (window.innerWidth > 1274) {
			// NOTE: Expand sidebar at large screen

			dispatch(toggleExpandSidebar());
		}
	}, []); // eslint-disable-line

	return children;
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
		<ReduxProvider>
			<Component {...pageProps} />
			<Footer />
		</ReduxProvider>
	);
}

export default MyApp;
