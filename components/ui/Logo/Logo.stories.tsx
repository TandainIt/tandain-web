import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './Logo';

export default {
	title: 'Components/UI/Logo',
	component: Logo,
  argTypes: {
    isFull: {
      type: { name: 'boolean'},
      defaultValue: true
    }
  }
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args) => (
	<Logo {...args} />
);
