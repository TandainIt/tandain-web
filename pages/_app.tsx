import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { Footer } from '@/components/layouts';
import { Toast } from '@/components/ui';

import '@/styles/index.sass';
import apolloClient from '@/loaders/apolloClient';
import store from '@/store';
import { injectStore } from '@/loaders/apolloClient/apolloClient';

export function AppProvider({ children }) {
	injectStore(store);

	return (
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>{children}</Provider>
		</ApolloProvider>
	);
}

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />
			<Toast />
			<Footer />
		</AppProvider>
	);
}

export default MyApp;
