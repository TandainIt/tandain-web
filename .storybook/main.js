const path = require('path');

module.exports = {
	stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)', '../modules/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
    'storybook-addon-next-router'
	],
	framework: '@storybook/react',
	webpackFinal: async (config, _) => {
		config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../"),
    };

		return config;
	},
};
