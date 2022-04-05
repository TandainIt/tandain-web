import { ComponentMeta, ComponentStory } from '@storybook/react';

import Page from './Page';

export default {
	title: 'Components/Layouts/Page',
	component: Page,
} as ComponentMeta<typeof Page>;

export const Default: ComponentStory<typeof Page> = () => <Page />;
