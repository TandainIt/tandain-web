import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputField from './InputField';

export default {
	title: 'Components/UI/InputField',
	component: InputField,
	argTypes: {
		size: {
			defaultValue: 'md',
			options: ['md'],
			control: {
				type: 'select',
			},
		},
		autoFocus: {
			defaultValue: true,
			control: {
				type: 'boolean',
			},
		},
	},
} as ComponentMeta<typeof InputField>;

export const Default: ComponentStory<typeof InputField> = (args) => (
	<InputField {...args} />
);
