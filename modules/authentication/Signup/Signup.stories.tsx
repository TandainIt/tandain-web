import { ComponentMeta, ComponentStory } from "@storybook/react";
import Signup from "./Signup";

export default {
  title: 'Modules/Authentication/Signup',
  component: Signup,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Signup>

export const Default: ComponentStory<typeof Signup> = (args) => (<Signup {...args}/>)