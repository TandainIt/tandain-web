import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReduxProvider } from '@/pages/_app';

import AuthenticatedHeader from './AuthenticatedHeader';

export default {
	title: 'Components/Layouts/Header/AuthenticatedHeader',
	component: AuthenticatedHeader,
} as ComponentMeta<typeof AuthenticatedHeader>;

export const Default: ComponentStory<typeof AuthenticatedHeader> = () => (
	<ReduxProvider>
		<AuthenticatedHeader />
	</ReduxProvider>
);
