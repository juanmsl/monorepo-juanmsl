import { Grid } from '../../layouts';
import { Typography } from '../typography';

import { Accordion } from './accordion';
import { MiddleContent as AccordionItemStories } from './accordion-item.stories';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    className: { control: false },
    noSeparators: { control: 'boolean' },
    style: { control: false },
  },
  args: {
    noSeparators: false,
  },
  decorators: [
    Story => (
      <Grid style={{ width: '500px' }}>
        <Story />
      </Grid>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: Array.from(new Array(10)).map((_, key) => (
      <Accordion.Item {...AccordionItemStories.args} title={`Item ${key + 1}`} key={key}>
        <Typography variant='header4'>Title {key + 1}</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque blanditiis commodi delectus
          deleniti distinctio excepturi explicabo facere fuga laboriosam natus nihil pariatur perspiciatis quaerat qui
          recusandae rerum sed, unde voluptatem.
        </Typography>
      </Accordion.Item>
    )),
  },
};
