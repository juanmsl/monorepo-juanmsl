import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { Input } from './input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    type: { control: 'select', options: ['email', 'number', 'search', 'tel', 'text', 'url'] },
    min: { control: { type: 'range' }, if: { arg: 'type', eq: 'number' } },
    max: { control: { type: 'range' }, if: { arg: 'type', eq: 'number' } },
  },
  args: {
    label: 'Input',
    type: 'text',
    min: 0,
    max: 0,
    placeholder: 'Input',
    ...UnControlledComponentArgs,
    ...FieldSharedArgs,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState('');

    return <Input {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
