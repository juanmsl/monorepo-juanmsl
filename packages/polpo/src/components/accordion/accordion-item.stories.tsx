import { Grid } from '../../layouts';
import { Icon, IconNames } from '../icon';
import { Line } from '../line';
import { Typography } from '../typography';

import { Accordion } from './accordion';
import { AccordionItem } from './accordion-item';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccordionItem> = {
  title: 'Accordion/AccordionItem',
  component: AccordionItem,
  argTypes: {
    children: { control: false },
    className: { control: false },
    classNames: { control: false },
    style: { control: false },
    icon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    startContent: { control: false },
    endContent: { control: false },
    content: { control: false },
  },
  args: {},
  render: args => (
    <Accordion>
      <AccordionItem {...args}>
        <Typography variant='header4'>Title</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque blanditiis commodi delectus
          deleniti distinctio excepturi explicabo facere fuga laboriosam natus nihil pariatur perspiciatis quaerat qui
          recusandae rerum sed, unde voluptatem.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda atque blanditiis commodi delectus
          deleniti distinctio excepturi explicabo facere fuga laboriosam natus nihil pariatur perspiciatis quaerat qui
          recusandae rerum sed, unde voluptatem.
        </Typography>
      </AccordionItem>
    </Accordion>
  ),
  decorators: [
    Story => (
      <Grid style={{ width: '500px' }}>
        <Story />
      </Grid>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const Default: Story = {
  args: {
    title: 'Accordion Item',
    subtitle: 'Default with Title and Subtitle',
  },
};

export const LeftContent: Story = {
  args: {
    title: 'Accordion Item',
    subtitle: 'Custom left content',
    startContent: isOpen => (
      <Grid
        pc='center'
        style={{
          borderRadius: '8px',
          color: `${isOpen ? 'tomato' : 'currentColor'}`,
          border: '1px solid',
          filter: `grayscale(${isOpen ? 0 : 1})`,
          width: '40px',
          height: '40px',
        }}
      >
        <Icon name='airplane' />
      </Grid>
    ),
  },
};

export const CustomContent: Story = {
  argTypes: {
    title: { control: false },
    subtitle: { control: false },
  },
  args: {
    content: isOpen => (
      <Grid flow='column' gap='1em' ai='center' gtc='auto 1fr auto'>
        <section>
          <Typography variant='body' weight='bold' noPadding style={{ color: `${isOpen ? 'tomato' : 'currentColor'}` }}>
            Accordion item
          </Typography>
          <Typography variant='small'>Custom content</Typography>
        </section>
        <Line />
        <Grid
          pc='center'
          style={{
            borderRadius: '8px',
            color: `${isOpen ? 'tomato' : 'currentColor'}`,
            border: '1px solid',
            filter: `grayscale(${isOpen ? 0 : 1})`,
            width: '40px',
            height: '40px',
          }}
        >
          <Icon name={isOpen ? 'eye' : 'eye-hidden'} />
        </Grid>
      </Grid>
    ),
  },
};

export const RightContent: Story = {
  args: {
    title: 'Item',
    subtitle: 'Subtitle',
    endContent: isOpen => (
      <section>
        <Typography variant='small'>{isOpen ? 'Close' : 'Open'}</Typography>
      </section>
    ),
  },
};
