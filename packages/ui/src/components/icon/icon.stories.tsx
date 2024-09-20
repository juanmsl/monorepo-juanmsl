import { fn } from '@storybook/test';

import { Grid } from '../../layouts';
import { ClickToCopy } from '../tooltips';
import { Typography } from '../typography';

import { Icon } from './icon';

import { IconNames } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { options: [undefined, ...IconNames.toSorted()] },
    fill: { control: 'color' },
    size: { control: { type: 'range', min: 10, max: 100 } },
    scale: { control: { type: 'range', min: 1, max: 5 } },
    inCircle: { control: 'boolean' },
  },
  args: {
    size: 32,
    fill: 'currentColor',
    name: 'camera',
    scale: 3,
    inCircle: false,
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
};

export const All: Story = {
  args: {},
  argTypes: {
    ...meta.argTypes,
    name: { control: false },
  },
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <Grid gtc='repeat(auto-fit, 100px)' gtr='auto auto' pc='center' gap='3em'>
      {IconNames.toSorted().map(name => (
        <ClickToCopy key={name} value={name} tooltipText='Click to copy' tooltipCopiedText='Copied!'>
          <Grid gap='0.6em' gtr='subgrid' row='span 2' jc='center' ji='center'>
            <Icon {...args} name={name} />
            <Typography variant='small' align='center' family='code' noPadding>
              {name}
            </Typography>
          </Grid>
        </ClickToCopy>
      ))}
    </Grid>
  ),
};
