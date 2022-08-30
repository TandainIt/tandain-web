import { ComponentMeta, ComponentStory } from '@storybook/react';

import AuthGoogleButton from './AuthGoogleButton';

export default {
	title: 'Modules/Auth/AuthGoogleButton',
	component: AuthGoogleButton,
	argTypes: {
		children: {
			type: { name: 'string', required: true },
			defaultValue: 'Sign up with Google',
		},
	},
} as ComponentMeta<typeof AuthGoogleButton>;

export const Default: ComponentStory<typeof AuthGoogleButton> = (args) => (
	<AuthGoogleButton {...args} />
);
