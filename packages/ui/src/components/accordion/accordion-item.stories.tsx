import { Grid } from '../../layouts';
import { Icon, IconNames } from '../icon';
import { Typography } from '../typography';

import { Accordion } from './accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion.Item> = {
  title: 'Components/Accordion/AccordionItem',
  component: Accordion.Item,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    className: { control: false },
    classNames: { control: false },
    style: { control: false },
    icon: { control: 'select', options: [undefined, ...IconNames.toSorted()] },
    title: { control: 'text' },
    titleVariant: {
      control: 'inline-radio',
      options: ['hero', 'header1', 'header2', 'header3', 'header4', 'body', 'label', 'small'],
    },
    subtitle: { control: 'text' },
    subtitleVariant: {
      control: 'inline-radio',
      options: ['hero', 'header1', 'header2', 'header3', 'header4', 'body', 'label', 'small'],
    },
    startContent: { control: false },
    endContent: { control: false },
    middleContent: { control: false },
  },
  args: {},
  render: args => (
    <Accordion>
      <Accordion.Item {...args}>
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
      </Accordion.Item>
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
type Story = StoryObj<typeof Accordion.Item>;

export const Default: Story = {
  args: {
    title: 'Item',
    subtitle: 'Subtitle',
  },
};

export const LeftContent: Story = {
  args: {
    title: 'Item',
    subtitle: 'Subtitle',
    startContent: isOpen => <Icon name={isOpen ? 'camera' : 'airplane'} />,
  },
};

export const MiddleContent: Story = {
  args: {
    title: 'Item',
    subtitle: 'Subtitle',
    middleContent: ({ isOpen, title, subtitle }) => (
      <section>
        <Typography variant='body' weight='bold' noPadding>
          {title}{' '}
          <Typography variant='small' weight='light'>
            ({subtitle})
          </Typography>
        </Typography>
        <Typography variant='small'>
          <Icon name={isOpen ? 'eye' : 'eye-hidden'} /> Is {isOpen ? 'Opened' : 'Closed'}
        </Typography>
      </section>
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
