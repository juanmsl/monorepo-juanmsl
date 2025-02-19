import { Cursor } from './cursor';

import { SectionLayout, Typography } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Cursor> = {
  title: 'Cursor',
  component: Cursor,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
  render: () => (
    <section>
      <Cursor />
      <SectionLayout>
        <Typography align='center' variant='header4'>
          Hello world
        </Typography>
        <Typography align='center'>
          <a href=''>Link, hover me!</a>
        </Typography>
      </SectionLayout>
    </section>
  ),
};

export default meta;
type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  args: {},
};
