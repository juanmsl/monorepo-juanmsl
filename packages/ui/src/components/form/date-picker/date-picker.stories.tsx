import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import { DatePicker } from './date-picker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    type: { control: 'select', options: ['date', 'datetime-local', 'month', 'time', 'week'] },
  },
  args: {
    type: 'date',
    label: 'DatePicker',
    rightIcon: undefined,
    leftIcon: undefined,
    ...FieldSharedArgs,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState('');

    return <DatePicker {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};
