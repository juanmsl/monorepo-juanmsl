import { RadiusVariants, SizeVariants } from '../../../core/variants';
import { Grid } from '../../../layouts';
import { IconNames } from '../../icon';

import { Button, ButtonColor, ButtonVariant } from './button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    className: { control: false },
    color: {
      control: 'inline-radio',
      options: [undefined, ...Object.values(ButtonColor)],
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    leftIcon: { options: [undefined, ...IconNames.toSorted()] },
    noShadow: { control: 'boolean' },
    onClick: { control: false },
    size: { control: 'inline-radio', options: Object.values(SizeVariants) },
    style: { control: false },
    rightIcon: { options: [undefined, ...IconNames.toSorted()] },
    radius: { control: 'inline-radio', options: Object.values(RadiusVariants) },
    type: { control: false, options: ['button', 'submit', 'reset'] },
    variant: { control: 'inline-radio', options: Object.values(ButtonVariant) },
    width: { control: 'inline-radio', options: ['fit', 'full'] },
  },
  args: {
    width: 'full',
    size: 'medium',
    radius: 'medium',
    children: 'Button',
    noShadow: false,
    disabled: false,
    isLoading: false,
  },
  decorators: [
    Story => (
      <Grid ji='center' gtc='300px'>
        <Story />
      </Grid>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Variants: Story = {
  argTypes: {
    variant: { control: false },
    children: { control: false },
  },
  render: args => (
    <Grid gtc='300px' ji='center' gap='1em' ai='center'>
      {Object.values(ButtonVariant).map(variant => (
        <Button {...args} variant={variant} key={variant}>
          {variant}
        </Button>
      ))}
    </Grid>
  ),
};

export const Sizes: Story = {
  argTypes: {
    size: { control: false },
    children: { control: false },
  },
  render: args => (
    <Grid gtc='300px' ji='center' gap='1em' ai='center'>
      {Object.values(SizeVariants).map(size => (
        <Button {...args} size={size} key={size}>
          {size}
        </Button>
      ))}
    </Grid>
  ),
};

export const Colors: Story = {
  argTypes: {
    color: { control: false },
    children: { control: false },
  },
  render: args => (
    <Grid gtc='300px' ji='center' gap='1em' ai='center'>
      <Button {...args}>Default</Button>
      {Object.values(ButtonColor).map(color => (
        <Button {...args} color={color} key={color}>
          {color}
        </Button>
      ))}
    </Grid>
  ),
};
