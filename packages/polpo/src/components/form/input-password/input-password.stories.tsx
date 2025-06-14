import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import { InputPassword } from './input-password';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof InputPassword> = {
  title: 'Form/InputPassword',
  component: InputPassword,
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    rightIcon: { table: { disable: true } },
  },
  args: {
    label: 'Password',
    placeholder: 'Password',
    ...FieldSharedArgs,
    rightIcon: undefined,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState('');

    return <InputPassword {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {},
};
