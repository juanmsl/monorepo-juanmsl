import { RadiusVariants, SizeVariants } from '../../core/variants';
import { Flex } from '../../layouts';

import { Tag } from './tag';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    isSelected: { control: 'boolean' },
    children: { control: 'text' },
    size: { control: 'inline-radio', options: Object.values(SizeVariants) },
    radius: { control: 'inline-radio', options: Object.values(RadiusVariants) },
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
  decorators: [
    (Story, { args }) => (
      <Flex wrap='wrap' gap='1em'>
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
        <Story {...args} />
      </Flex>
    ),
  ],
};
