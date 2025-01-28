import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import { Textarea } from './textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    rows: { control: 'number' },
    resize: { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
    rightIcon: { table: { disable: true } },
    leftIcon: { table: { disable: true } },
  },
  args: {
    label: 'Textarea',
    rows: 4,
    resize: 'vertical',
    placeholder: 'Textarea',
    ...FieldSharedArgs,
    leftIcon: undefined,
    rightIcon: undefined,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState('');

    return <Textarea {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};
