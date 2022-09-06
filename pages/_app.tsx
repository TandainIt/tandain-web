import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { Footer } from '@/components/layouts';
import { Toast } from '@/components/ui';

import '@/styles/index.sass';
import apolloClient from '@/loaders/apolloClient';
import store from '@/store';

export function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={apolloClient}>
			<ReduxProvider>
				<Component {...pageProps} />
				<Toast />
				<Footer />
			</ReduxProvider>
		</ApolloProvider>
	);
}

export default MyApp;
