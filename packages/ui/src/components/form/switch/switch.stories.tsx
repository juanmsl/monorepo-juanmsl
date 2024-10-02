import { useState } from 'react';

import { IconNames } from '../../icon';
import { UnControlledComponentArgTypes } from '../form.stories.types';

import { Switch } from './switch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
    width: { control: { type: 'range', min: 3, max: 5, step: 0.05 } },
    dotSize: { control: { type: 'range', min: 1, max: 5, step: 0.05 } },
    dotHoverSize: { control: { type: 'range', min: 1, max: 2, step: 0.05 } },
    padding: { control: { type: 'range', min: 0, max: 5, step: 0.05 } },
    leftIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    rightIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
  },
  args: {
    label: 'Switch',
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
