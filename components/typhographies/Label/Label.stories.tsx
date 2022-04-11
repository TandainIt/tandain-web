import { ComponentMeta, ComponentStory } from '@storybook/react';

import Label from './Label';

export default {
	title: 'Components/Typhographies/Label',
	component: Label,
	argTypes: {
		children: {
			type: { name: 'string', require: true },
			defaultValue: 'Label',
		},
		variant: {
			defaultValue: 'sans-serif',
		},
	},
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (args) => (
	<Label {...args}>{args.children}</Label>
);
