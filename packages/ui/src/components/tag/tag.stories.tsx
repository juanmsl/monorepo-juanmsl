import { Flex } from '../../layouts/flex/flex';

import { Tag } from './tag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    isSelected: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Tag',
    isSelected: false,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Single: Story = {
  args: {},
};

export const Many: Story = {
  args: {},
  render: (args, { isSelected }) => <Tag isSelected={isSelected} {...args} />,
  decorators: [
    Story => (
      <Flex wrap='wrap' gap='1em'>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </Flex>
    ),
  ],
};
