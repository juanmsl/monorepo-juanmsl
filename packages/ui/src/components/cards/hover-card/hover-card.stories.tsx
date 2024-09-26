import { Grid } from '../../../layouts';
import { Typography } from '../../typography';

import { HoverCard } from './hover-card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/Cards/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    width: { control: 'inline-radio', options: ['fit-content', '100%'] },
    translationZ: { control: { type: 'range', min: 1, max: 60 } },
    threshold: { control: { type: 'range', min: 1, max: 60 } },
    children: { control: false },
  },
  render: ({ children, ...args }) => (
    <HoverCard {...args}>
      <Grid
        pc='center'
        style={{
          background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
          width: '300px',
          height: '300px',
          borderRadius: '10px',
        }}
      >
        <Typography variant='header4'>{children}</Typography>
      </Grid>
    </HoverCard>
  ),
  args: {
    children: 'Hover me',
    threshold: 5,
    translationZ: 25,
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
};
