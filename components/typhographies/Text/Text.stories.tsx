import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from './Text';

export default {
	title: 'Components/Typhographies/Text',
	component: Text,
	argTypes: {
		children: {
			type: { name: 'string', require: true },
			defaultValue: 'Text',
		},
		variant: {
			defaultValue: 'sans-serif',
		},
	},
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => (
	<Text {...args}>{args.children}</Text>
);
