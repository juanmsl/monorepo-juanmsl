import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { Slider } from './slider';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
  args: {
    label: 'Slider',
    min: 0,
    max: 100,
    step: 1,
    ...UnControlledComponentArgs,
    ...FieldSharedArgs,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState(0);

    return <Slider {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
};
