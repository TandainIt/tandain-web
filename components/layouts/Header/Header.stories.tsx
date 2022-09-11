import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppProvider } from '@/pages/_app';
import { AuthenticatedHeader, UnauthenticatedHeader } from './Header';

export default {
	title: 'Components/Layouts/Header',
} as ComponentMeta<typeof AuthenticatedHeader | typeof UnauthenticatedHeader>;

export const Authenticated: ComponentStory<typeof AuthenticatedHeader> = () => (
	<AppProvider>
		<AuthenticatedHeader />
	</AppProvider>
);

export const Unauthenticated: ComponentStory<typeof UnauthenticatedHeader> =
	() => (
		<AppProvider>
			<UnauthenticatedHeader />
		</AppProvider>
	);
