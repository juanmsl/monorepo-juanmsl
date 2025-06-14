import { useState } from 'react';

import { ColorVariants, SizeVariants } from '../../../core/variants';
import { Grid } from '../../../layouts';
import { IconNames } from '../../icon';
import { UnControlledComponentArgTypes } from '../form.stories.types';

import { Switch } from './switch';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
    width: { control: 'inline-radio', options: Object.values(SizeVariants) },
    size: { control: 'inline-radio', options: Object.values(SizeVariants) },
    dotHoverSize: { control: { type: 'range', min: 1, max: 2, step: 0.05 } },
    padding: { control: { type: 'range', min: 0, max: 5, step: 0.05 } },
    leftIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    rightIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    internalLeftIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    internalRightIcon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    color: {
      control: 'inline-radio',
      options: [undefined, ...Object.values(ColorVariants)],
    },
  },
  args: {
    label: 'Switch',
    color: ColorVariants.Primary,
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

export const Icons: Story = {
  args: {
    label: undefined,
    leftIcon: 'sun',
    rightIcon: 'moon',
    leftIconTooltip: 'Sun',
    rightIconTooltip: 'Moon',
  },
};

export const InternalIcons: Story = {
  args: {
    label: undefined,
    internalLeftIcon: 'sun',
    internalRightIcon: 'moon',
  },
};

export const Labels: Story = {
  args: {
    label: 'On',
    leftLabel: 'Off',
  },
};

export const Colors: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState(false);

    return (
      <Grid gtc='300px' jc='center' ji='start' gap='1em' ai='center'>
        <Switch {...args} color={undefined} label='Default' value={value} setValue={setValue} />
        {Object.values(ColorVariants).map(color => (
          <Switch {...args} label={color} value={value} setValue={setValue} color={color} key={color} />
        ))}
      </Grid>
    );
  },
};
