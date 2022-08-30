/** @type {import('next').NextConfig} */

const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const { dependencies } = require('./package.json');

module.exports = withFederatedSidecar({
	name: 'tandainClient', // NOTE: Don't use kebab-case
	filename: 'static/chunks/remoteEntry.js',
	exposes: {
		'./TrashIcon': './components/icons/TrashIcon.tsx',
		'./Button': './components/ui/Button/index.ts',
		'./Spinner': './components/ui/Spinner/index.ts',
		'./Tooltip': './components/ui/Tooltip/index.ts',
		'./Title': './components/typhographies/Title/index.ts',
	},
	shared: {
		...dependencies,
		clsx: {
			singleton: true,
			requiredVersion: dependencies.clsx,
		},
		react: {
			singleton: true,
			requiredVersion: dependencies.react,
		},
		'react-dom': {
			singleton: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
})({
	// your original next.config.js export
	reactStrictMode: true,
	env: {
		CLIENT_URL: process.env.CLIENT_URL,
		API_URL: process.env.API_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		API_GATEWAY_HOST: process.env.API_GATEWAY_HOST,
		GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
	},
	webpack(config) {
		config.output.publicPath = 'auto';

		return config;
	},
});
