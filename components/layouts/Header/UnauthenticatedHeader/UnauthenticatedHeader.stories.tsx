import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReduxProvider } from '@/pages/_app';

import UnauthenticatedHeader from './UnauthenticatedHeader';

export default {
	title: 'Components/Layouts/Header/UnauthenticatedHeader',
	component: UnauthenticatedHeader,
} as ComponentMeta<typeof UnauthenticatedHeader>;

export const Default: ComponentStory<typeof UnauthenticatedHeader> = () => (
	<ReduxProvider>
		<UnauthenticatedHeader />
	</ReduxProvider>
);
