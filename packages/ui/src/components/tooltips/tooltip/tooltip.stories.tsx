import { Tooltip } from './tooltip';

import { POSITION } from '@juanmsl/helpers';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltips/Tooltip',
  component: Tooltip,
  argTypes: {
    position: { control: 'inline-radio', options: Object.values(POSITION) },
    offset: { control: { type: 'range', min: 0, max: 200, step: 1 } },
    disabled: { control: 'boolean' },
    content: { control: 'text' },
    children: { control: false },
  },
  args: {
    content: 'Tooltip content',
  },
  render: (args, { children }) => <Tooltip {...args}>{children}</Tooltip>,
  decorators: [
    Story => (
      <Story>
        <span>Hello world</span>
      </Story>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};
