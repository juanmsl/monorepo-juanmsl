import { useState } from 'react';

import { Button } from '../../buttons';
import ActionModalStory from '../action-modal/action-modal.stories';

import { ConfirmationModal } from './confirmation-modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmationModal> = {
  title: 'Modals/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  argTypes: {
    ...ActionModalStory.argTypes,
    title: { control: 'text' },
    onAccept: { control: false },
    onReject: { control: false },
    acceptText: { control: 'text' },
    rejectText: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
  args: {
    title: 'Are you sure?',
    acceptText: 'Accept',
    rejectText: 'Reject',
    children: 'Are you sure want to execute an action?',
  },
  decorators: [
    Story => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open modal</Button>
          <Story isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      );
    },
  ],
  render: (args, { isOpen, onClose }) => {
    return <ConfirmationModal {...args} isOpen={isOpen} onClose={onClose} />;
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  args: {},
};
