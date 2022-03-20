import type { AppProps } from 'next/app';

import Footer from '../components/layouts/Footer';

import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
