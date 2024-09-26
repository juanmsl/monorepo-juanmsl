import { useState } from 'react';

import { UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { Checkbox } from './checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    ...UnControlledComponentArgTypes,
    placeholder: { table: { disable: true } },
    label: { control: 'text' },
  },
  args: {
    label: 'Checkbox',
    ...UnControlledComponentArgs,
  },
  render: args => {
    const [value, setValue] = useState(false);

    return <Checkbox {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
