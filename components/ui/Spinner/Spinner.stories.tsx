import { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner from './Spinner';

export default {
	title: 'Components/UI/Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = (args) => (
	<Spinner {...args} />
);
