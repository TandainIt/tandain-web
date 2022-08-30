import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleListItem from './ArticleListItem';

export default {
	title: 'Modules/Article/ArticleListItem',
	component: ArticleListItem,
	argTypes: {
		title: {
			type: { name: 'string', required: true },
			defaultValue: 'List Item Title',
		},
		sourceName: {
			type: { name: 'string', required: true },
			defaultValue: 'List Item Source',
		},
		sourceURL: {
			type: { name: 'string', required: true },
			defaultValue: '/',
		},
		imgURL: {
			type: { name: 'string', required: true },
			defaultValue: '/temp/my-list-item-img.png',
		},
		onDelete: {
			type: { name: 'function', required: true },
		},
	},
} as ComponentMeta<typeof ArticleListItem>;

export const Default: ComponentStory<typeof ArticleListItem> = (args) => (
	<ArticleListItem {...args} />
);
