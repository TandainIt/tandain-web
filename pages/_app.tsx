import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import store from '../store';
import useAppDispatch from '../hooks/useAppDispatch';
import { setToastError, toggleExpandSidebar } from '../store/actions/page';

import Toast from '@/components/ui/Toast';
import Footer from '@/components/layouts/Footer';

import classes from '@/styles/pages/App.module.sass';
import '@/styles/index.sass';
import useAppSelector from '@/hooks/useAppSelector';
import pageSelector from '@/store/selectors/page';

function MyComponent({ children }) {
	// NOTE: Configuring globally at first render

	const dispatch = useAppDispatch();

	const { error } = useAppSelector(pageSelector);

	function onCloseToast() {
		dispatch(setToastError(undefined));
	}

	useEffect(() => {
		if (window.innerWidth > 1274) {
			// NOTE: Expand sidebar at large screen

			dispatch(toggleExpandSidebar());
		}
	}, []); // eslint-disable-line

	return (
		<>
			{children}
			{!!error && (
				<Toast
					className={classes.Toast}
					title={error.displayName}
					description={error.displayMessage}
					onClose={onCloseToast}
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
		<ReduxProvider>
			<Component {...pageProps} />
		</ReduxProvider>
	);
}

export default MyApp;
