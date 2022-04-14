/** @type {import('next').NextConfig} */

const { withFederatedSidecar } = require('@module-federation/nextjs-mf');
const { dependencies } = require('./package.json');

module.exports = withFederatedSidecar({
	name: 'tandainClient', // NOTE: Don't use kebab-case
	filename: 'static/chunks/remoteEntry.js',
	exposes: {
		'./Button': './components/ui/Button/Button.tsx',
	},
	shared: {
		...dependencies,
    clsx: {
      singleton: true,
      requiredVersion: dependencies.clsx,
    },
		react: {
			singleton: true,
			eager: true,
			requiredVersion: dependencies.react,
		},
		'react-dom': {
			singleton: true,
			eager: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
})({
	// your original next.config.js export
	reactStrictMode: true,
	webpack(config) {
    config.output.publicPath = 'http://localhost:3000/_next/'

		return config;
	},
});
