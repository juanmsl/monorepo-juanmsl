import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { InputColor } from './input-color';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputColor> = {
  title: 'Components/Form/InputColor',
  component: InputColor,
  tags: ['autodocs'],
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    showValueText: { control: 'boolean' },
  },
  args: {
    label: 'Input Color',
    showValueText: true,
    rightIcon: undefined,
    leftIcon: undefined,
    ...UnControlledComponentArgs,
    ...FieldSharedArgs,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState('#147EFB');

    return <InputColor {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof InputColor>;

export const Default: Story = {
  args: {},
};

export const Box: Story = {
  args: {
    label: '',
    showValueText: false,
    variant: undefined,
  },
};
