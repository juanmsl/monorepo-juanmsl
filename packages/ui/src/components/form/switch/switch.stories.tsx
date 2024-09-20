import { useState } from 'react';

import { UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { Switch } from './switch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
  },
  args: {
    label: 'Switch',
    ...UnControlledComponentArgs,
  },
  render: args => {
    const [value, setValue] = useState(false);

    return <Switch {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
