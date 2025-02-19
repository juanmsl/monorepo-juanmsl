import { Button } from '../../buttons';
import ActionModalStory from '../action-modal/action-modal.stories';

import { ConfirmationModal } from './confirmation-modal';

import { useModalTransition } from '@polpo/hooks';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmationModal> = {
  title: 'Modals/ConfirmationModal',
  component: ConfirmationModal,
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
      const { modalState, closeModal, openModal, isVisible } = useModalTransition(300);

      return (
        <>
          <Button onClick={openModal}>Open modal</Button>
          <Story modalState={modalState} closeModal={closeModal} isVisible={isVisible} />
        </>
      );
    },
  ],
  render: ({ children, ...args }, { closeModal, isVisible, modalState }) => {
    return (
      <ConfirmationModal
        {...args}
        isVisible={isVisible}
        modalState={modalState}
        onClose={closeModal}
        onAccept={() =>
          new Promise(resolve => {
            setTimeout(resolve, 1000);
          })
        }
        onReject={() =>
          new Promise(resolve => {
            setTimeout(resolve, 1000);
          })
        }
      >
        {children}
      </ConfirmationModal>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  args: {},
};
