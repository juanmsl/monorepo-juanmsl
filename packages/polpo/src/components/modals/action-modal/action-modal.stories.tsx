import { ActionModal } from './action-modal';

import { useModalTransition } from '@polpo/hooks';
import { Button, Grid, IconNames, Line, Typography } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionModal> = {
  title: 'Modals/ActionModal',
  component: ActionModal,
  argTypes: {
    actionRequired: { control: 'boolean' },
    icon: { options: [undefined, ...IconNames.toSorted()] },
    noCloseButton: { control: 'boolean' },
    noPadding: { control: 'boolean' },
    className: { control: false },
    style: { control: false },
    lineOnTop: { control: 'boolean' },
    backCard: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Action modal content',
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
};

export default meta;
type Story = StoryObj<typeof ActionModal>;

export const Classic: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    lineOnTop: true,
    noPadding: true,
  },
  render: (args, { closeModal, isVisible, modalState }) => {
    return (
      <ActionModal {...args} isVisible={isVisible} modalState={modalState} onClose={closeModal}>
        <Typography variant='header4' noPadding style={{ padding: '0 1rem' }}>
          Action modal
        </Typography>
        <Line />
        <Grid gap='1em' style={{ padding: '0 1rem 1rem' }}>
          <Typography>Are you sure want to execute an action?</Typography>
        </Grid>
        <Grid ai='center' gtc='repeat(2, 80px)' jc='end' gap='1em' style={{ padding: '0 1rem 1rem' }}>
          <ActionModal.ActionButton
            size='small'
            width='full'
            variant='ghost'
            onClick={() =>
              new Promise(resolve => {
                setTimeout(resolve, 2000);
              })
            }
          >
            No
          </ActionModal.ActionButton>
          <ActionModal.ActionButton
            size='small'
            width='full'
            color='primary'
            onClick={() =>
              new Promise(resolve => {
                setTimeout(resolve, 2000);
              })
            }
          >
            Yes
          </ActionModal.ActionButton>
        </Grid>
      </ActionModal>
    );
  },
};

export const Confirmation: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    backCard: true,
    lineOnTop: true,
    icon: 'user',
  },
  render: (args, { closeModal, isVisible, modalState }) => {
    return (
      <ActionModal {...args} isVisible={isVisible} modalState={modalState} onClose={closeModal}>
        <Typography variant='header4' align='center' noPadding>
          Action modal
        </Typography>
        <Typography>Are you sure want to execute an action?</Typography>
        <Grid ai='center' gtc='repeat(2, minmax(100px, 1fr))' jc='center' gap='1em' style={{ margin: 'auto' }}>
          <ActionModal.ActionButton
            size='small'
            width='full'
            variant='ghost'
            onClick={() =>
              new Promise(resolve => {
                setTimeout(resolve, 2000);
              })
            }
          >
            No
          </ActionModal.ActionButton>
          <ActionModal.ActionButton
            size='small'
            width='full'
            color='primary'
            onClick={() =>
              new Promise(resolve => {
                setTimeout(resolve, 2000);
              })
            }
          >
            Yes
          </ActionModal.ActionButton>
        </Grid>
      </ActionModal>
    );
  },
};
