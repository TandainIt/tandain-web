import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
	title: 'Components/UI/Button',
	component: Button,
	argTypes: {
		color: {
			defaultValue: 'primary',
			options: ['primary'],
			control: {
				type: 'select',
			},
		},
		size: {
			defaultValue: 'md',
			options: ['md'],
			control: {
				type: 'select',
			},
		},
		href: {
			type: { name: 'string', required: true },
			control: { type: 'text' },
		},
    round: {
      type: { name: 'boolean' },
      defaultValue: false
    }
	},
} as ComponentMeta<typeof Button>;

const Default: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);

export const Solid = Default.bind({});
Solid.args = {
	variant: 'solid',
};

export const Outlined = Default.bind({});
Outlined.args = {
	variant: 'outlined',
};

export const Text = Default.bind({});
Text.args = {
	variant: 'text',
};
