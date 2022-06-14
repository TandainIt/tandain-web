import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toast from './Toast';

export default {
	title: 'Components/UI/Toast',
	component: Toast,
	argTypes: {
		title: {
			type: {
				name: 'string',
			},
			defaultValue: 'Title',
		},
		description: {
			type: {
				name: 'string',
			},
			defaultValue: 'This is the toast description',
		},
		variant: {
			control: {
				type: 'select',
			},
			options: ['danger', 'warning', 'info', 'success'],
		},
	},
} as ComponentMeta<typeof Toast>;

const Default: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Danger = Default.bind({});
Danger.args = {
	variant: 'danger',
};

export const Warning = Default.bind({});
Warning.args = {
	variant: 'warning',
};

export const Info = Default.bind({});
Info.args = {
	variant: 'info',
};

export const Success = Default.bind({});
Success.args = {
	variant: 'success',
};
