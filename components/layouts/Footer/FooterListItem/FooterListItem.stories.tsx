import { ComponentMeta, ComponentStory } from '@storybook/react';

import FooterListItem from './FooterListItem';

export default {
	title: 'Components/Layouts/Footer/FooterListItem',
	component: FooterListItem,
} as ComponentMeta<typeof FooterListItem>;

export const Default: ComponentStory<typeof FooterListItem> = () => <FooterListItem href='/'>Link</FooterListItem>;
