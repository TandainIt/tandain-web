import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import ListIcon from '@/components/icons/ListIcon';
import NavItem from './NavItem';

const startIcons = { 'ListIcon': <ListIcon /> }

export default {
	title: 'Components/Layouts/Sidebar/NavItem',
	component: NavItem,
	argTypes: {
		isActive: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		isExpanded: {
			defaultValue: true,
			control: {
				type: 'boolean',
			},
		},
    href: {
      type: { name: 'string', required: true },
      control: { type: 'text' }  
    },
    startIcon: {
      options: Object.keys(startIcons),
      mapping: startIcons,
    }
	},
} as ComponentMeta<typeof NavItem>;

const Default: ComponentStory<typeof NavItem> = (args) => (
	<NavItem name='nav-item' startIcon={<ListIcon />} href='/mylist' {...args}>
		My List
	</NavItem>
);

export const Expanded = Default.bind({});
Expanded.args = {
	isExpanded: true,
};

export const Collapsed = Default.bind({});
Collapsed.args = {
	isExpanded: false,
};
