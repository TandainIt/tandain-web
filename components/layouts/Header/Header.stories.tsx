import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReduxProvider } from '@/pages/_app';
import { AuthenticatedHeader, UnauthenticatedHeader } from './Header';

export default {
	title: 'Components/Layouts/Header',
} as ComponentMeta<typeof AuthenticatedHeader | typeof UnauthenticatedHeader>;

export const Authenticated: ComponentStory<typeof AuthenticatedHeader> = () => (
	<ReduxProvider>
		<AuthenticatedHeader />
	</ReduxProvider>
);

export const Unauthenticated: ComponentStory<typeof UnauthenticatedHeader> =
	() => (
		<ReduxProvider>
			<UnauthenticatedHeader />
		</ReduxProvider>
	);
