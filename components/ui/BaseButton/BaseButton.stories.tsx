import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseButton from './BaseButton';

export default {
	title: 'Components/UI/BaseButton',
	component: BaseButton,
	argTypes: {
		href: {
			type: 'string',
		},
	},
} as ComponentMeta<typeof BaseButton>;

export const Default: ComponentStory<typeof BaseButton> = (args) => (
	<BaseButton {...args}>BaseButton</BaseButton>
);
