import { ComponentMeta, ComponentStory } from '@storybook/react';

import BaseHeader from './BaseHeader';

export default {
	title: 'Components/Layouts/Header/BaseHeader',
	component: BaseHeader,
} as ComponentMeta<typeof BaseHeader>;

export const Default: ComponentStory<typeof BaseHeader> = () => <BaseHeader />;
