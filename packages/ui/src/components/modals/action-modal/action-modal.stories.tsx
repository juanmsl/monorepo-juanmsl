import { useState } from 'react';

import { Grid } from '../../../layouts';
import { Button } from '../../buttons';
import { IconNames } from '../../icon';
import { Line } from '../../line';
import { Typography } from '../../typography';

import { ActionModal } from './action-modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionModal> = {
  title: 'Components/Modals/ActionModal',
  component: ActionModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: false },
    onClose: { control: false },
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
    return <ActionModal {...args} isOpen={isOpen} onClose={onClose} />;
  },
};

export default meta;
type Story = StoryObj<typeof ActionModal>;

export const Default: Story = {
  args: {},
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
  render: (args, { isOpen, onClose }) => {
    return (
      <ActionModal {...args} isOpen={isOpen} onClose={onClose}>
        <Typography variant='header4' align='center' noPadding>
          Action modal
        </Typography>
        <Typography>Are you sure want to execute an action?</Typography>
        <Grid ai='center' gtc='repeat(2, minmax(100px, 1fr))' jc='center' gap='1em' style={{ margin: 'auto' }}>
          <ActionModal.ActionButton
            size='small'
            width='full'
            variant='ghost'
            onClick={() => alert('Action button clicked')}
          >
            No
          </ActionModal.ActionButton>
          <ActionModal.ActionButton
            size='small'
            width='full'
            color='primary'
            onClick={() => alert('Action button clicked')}
          >
            Yes
          </ActionModal.ActionButton>
        </Grid>
      </ActionModal>
    );
  },
};

export const Classic: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    lineOnTop: true,
    noPadding: true,
  },
  render: (args, { isOpen, onClose }) => {
    return (
      <ActionModal {...args} isOpen={isOpen} onClose={onClose}>
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
            onClick={() => alert('Action button clicked')}
          >
            No
          </ActionModal.ActionButton>
          <ActionModal.ActionButton
            size='small'
            width='full'
            color='primary'
            onClick={() => alert('Action button clicked')}
          >
            Yes
          </ActionModal.ActionButton>
        </Grid>
      </ActionModal>
    );
  },
};
