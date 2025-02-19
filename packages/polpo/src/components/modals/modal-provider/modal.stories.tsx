import { Button } from '../../buttons';

import { ModalProvider } from './modal-provider';

import { Icon, Line, Typography } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalProvider> = {
  title: 'Modals/ModalProvider',
  component: ModalProvider,
  argTypes: {},
  args: {},
  render: ({ children }) => {
    return (
      <ModalProvider position='bottom center'>
        <ModalProvider.Trigger>
          <Button>
            <Icon name='order-list' size={24} />
          </Button>
        </ModalProvider.Trigger>

        <ModalProvider.Modal id='menu'>
          <Typography variant='header4' color='primary'>
            Menu
          </Typography>
          <Line />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum facere, incidunt magni minus
            natus nisi praesentium veniam voluptatum. Assumenda blanditiis consequuntur dicta distinctio dolore eius
            eligendi nostrum recusandae soluta.
          </Typography>
          {children}
        </ModalProvider.Modal>
      </ModalProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ModalProvider>;

export const Default: Story = {
  args: {},
};
