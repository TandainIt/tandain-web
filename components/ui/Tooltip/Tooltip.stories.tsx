import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../Button';
import Tooltip from './Tooltip';

export default {
	title: 'Components/UI/Tooltip',
	component: Tooltip,
	argTypes: {
		pos: {
			defaultValue: 'right',
		},
		text: {
			type: {
				name: 'string',
				required: true,
			},
			defaultValue: 'Tooltip',
		},
	},
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<Button>Hover Me</Button>
	</Tooltip>
);
