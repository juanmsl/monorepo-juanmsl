import { Button } from '../../buttons';
import { ModalBackdrop } from '../modal';

import { Menu } from './menu';

import { PositionContainer } from '@polpo/helpers';
import { useModal } from '@polpo/hooks';

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
              offset: 10,
              style: { height: 300, minWidth: 200 },
              onClose: closeModal,
              containerRef,
              children: (
                <>
                  <Menu.OptionsGroup label='Checkbox'>
                    <Menu.Option asCheckbox icon='house' disabled label='Option 1' />
                    <Menu.Option asCheckbox icon='magnifying-glass' selected label='Option 2' />
                    <Menu.Option asCheckbox icon='document' label='Option 3' />
                    <Menu.Option asCheckbox icon='spinner' disabled selected label='Option 4' />
                  </Menu.OptionsGroup>
                  <Menu.Divider />
                  <Menu.OptionsGroup label='Options disabled'>
                    <Menu.Option icon='instagram' label='Option 5' />
                    <Menu.Option icon='airplane' disabled label='Option 6' />
                    <Menu.Option icon='whatsapp' disabled selected label='Option 7' />
                    <Menu.Option icon='order-list' label='Option 8' />
                  </Menu.OptionsGroup>
                  <Menu.Divider />
                  <Menu.OptionsGroup label='Options'>
                    <Menu.Option icon='thinking' label='Option 9' />
                    <Menu.Option icon='game-control' label='Option 10' />
                    <Menu.Option icon='bicycle' selected label='Option 11' />
                    <Menu.Option icon='link' label='Option 12' />
                  </Menu.OptionsGroup>
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
