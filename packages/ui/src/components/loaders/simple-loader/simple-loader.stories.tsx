import { SimpleLoader } from './simple-loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SimpleLoader> = {
  title: 'SimpleLoader',
  component: SimpleLoader,
  argTypes: {
    spinDuration: { control: { type: 'range', min: 100, max: 1000, step: 50 } },
  },
  args: {
    spinDuration: 500,
  },
};

export default meta;
type Story = StoryObj<typeof SimpleLoader>;

export const Default: Story = {
  args: {},
};
