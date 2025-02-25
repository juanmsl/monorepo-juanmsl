import { Button } from '../../buttons';

import { Menu } from './menu';

import { PositionContainer } from '@polpo/helpers';
import { useModal } from '@polpo/hooks';
import { ModalBackdrop } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  title: 'Modals/Menu',
  component: Menu,
  argTypes: {
    closeOnClickOutside: { control: 'boolean' },
    transitionDuration: { control: false },
    windowOffset: { control: { type: 'range', min: 0, max: 100 } },
    position: { control: 'inline-radio', options: Object.values(PositionContainer) },
    offset: { control: { type: 'range', min: 0, max: 100 } },
  },
  args: {
    offset: 5,
    windowOffset: 10,
    children: 'Menu content',
    position: PositionContainer.BOTTOM_RIGHT,
    backdrop: ModalBackdrop.TRANSPARENT,
  },
  decorators: [
    (Story, { args }) => {
      const { openModal, closeModal, isOpen, containerRef } = useModal<HTMLButtonElement>();

      return (
        <>
          <Button width='full' leftIcon={isOpen ? 'door-open' : 'door-closed'} ref={containerRef} onClick={openModal}>
            Menu
          </Button>
          <Story
            args={{
              ...args,
              isOpen,
              onClose: closeModal,
              containerRef,
              children: (
                <>
                  <Menu.Option asCheckbox icon='house' disabled label='Option 1' />
                  <Menu.Option asCheckbox icon='magnifying-glass' selected label='Option 2' />
                  <Menu.Option asCheckbox icon='document' label='Option 3' />
                  <Menu.Option asCheckbox icon='spinner' disabled selected label='Option 4' />
                  <Menu.Divider />
                  <Menu.Option icon='instagram' label='Option 5' />
                  <Menu.Option icon='airplane' disabled label='Option 6' />
                  <Menu.Option icon='whatsapp' disabled selected label='Option 7' />
                  <Menu.Option icon='order-list' label='Option 8' />
                </>
              ),
            }}
          />
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};
