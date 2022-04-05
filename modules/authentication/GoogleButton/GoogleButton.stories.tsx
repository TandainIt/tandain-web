import { ComponentMeta, ComponentStory } from '@storybook/react';
import GoogleButton from './GoogleButton';

export default {
	title: 'Modules/Authentication/GoogleButton',
	component: GoogleButton,
	argTypes: {
		children: {
			type: { name: 'string', required: true },
			defaultValue: 'Sign up with Google',
		},
	},
} as ComponentMeta<typeof GoogleButton>;

export const Default: ComponentStory<typeof GoogleButton> = (args) => (
	<GoogleButton {...args} />
);
