import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from './Title';

export default {
	title: 'Components/Typhographies/Title',
	component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = (args) => (
	<Title {...args}>Title</Title>
);
