import { ReduxProvider } from '@/pages/_app';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
	title: 'Components/Layouts/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default: ComponentStory<typeof Sidebar> = (args) => (
	<ReduxProvider>
		<Sidebar {...args} />
	</ReduxProvider>
);
