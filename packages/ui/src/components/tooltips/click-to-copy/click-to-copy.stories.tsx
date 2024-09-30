import TooltipStory from '../tooltip/tooltip.stories';

import { ClickToCopy } from './click-to-copy';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ClickToCopy> = {
  title: 'Components/Tooltips/ClickToCopy',
  component: ClickToCopy,
  tags: ['autodocs'],
  argTypes: {
    position: TooltipStory.argTypes?.position,
    offset: TooltipStory.argTypes?.offset,
    children: { control: 'text' },
    value: { control: 'text' },
    tooltipText: { control: 'text' },
    tooltipCopiedText: { control: 'text' },
    copiedTextTimeout: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
  },
  args: {
    tooltipText: 'Copy to clipboard',
    tooltipCopiedText: 'Copied!',
    value: 'Hello world',
  },
  render: (args, { children }) => <ClickToCopy {...args}>{children}</ClickToCopy>,
  decorators: [
    Story => (
      <Story>
        <span>Hello world</span>
      </Story>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ClickToCopy>;

export const Default: Story = {
  args: {},
};
