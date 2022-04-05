import { ComponentMeta, ComponentStory } from '@storybook/react';

import Login from './Login';

export default {
	title: 'Modules/Authentication/Login',
	component: Login,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Login>;

export const Default: ComponentStory<typeof Login> = (args) => (
	<Login {...args} />
);
