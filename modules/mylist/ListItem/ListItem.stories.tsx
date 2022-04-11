import { ComponentMeta, ComponentStory } from '@storybook/react';

import ListItem from './ListItem';

import tempImage from '@/public/temp/my-list-item-img.png'

export default {
	title: 'Modules/MyList/ListItem',
	component: ListItem,
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
} as ComponentMeta<typeof ListItem>;

export const Default: ComponentStory<typeof ListItem> = (args) => (
	<ListItem {...args} />
);
