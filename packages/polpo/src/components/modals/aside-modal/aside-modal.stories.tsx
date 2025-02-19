import { AsideModal } from './aside-modal';

import { PositionContainer } from '@polpo/helpers';
import { useModalTransition } from '@polpo/hooks';
import { Button, Image, Typography } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AsideModal> = {
  title: 'Modals/AsideModal',
  component: AsideModal,
  argTypes: {
    position: {
      control: 'inline-radio',
      options: [PositionContainer.TOP, PositionContainer.LEFT, PositionContainer.RIGHT, PositionContainer.BOTTOM],
    },
    children: { control: 'text' },
    size: { control: { type: 'range', min: 100, max: 500, step: 10 } },
    className: { control: false },
    style: { control: false },
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
type Story = StoryObj<typeof AsideModal>;

export const Aside: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    size: 500,
  },
  render: (args, { closeModal, isVisible, modalState }) => {
    return (
      <AsideModal {...args} isVisible={isVisible} modalState={modalState} onClose={closeModal}>
        <Typography variant='header4'>Aside modal</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at cupiditate dolorum eaque eligendi
          error est fugit harum illo incidunt ipsum itaque labore nulla quaerat quam recusandae repellat sequi
          similique, sit unde vel veniam? Aliquam dicta ipsum voluptates voluptatum.
        </Typography>
        <Image src='https://picsum.photos/500/300' />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illum quas recusandae? Adipisci alias
          corporis, cumque doloribus ducimus ea enim, et hic id non nulla quae quis sed temporibus vero.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus error excepturi minima quae, quia
          quod voluptatem? Consectetur, enim exercitationem hic illo iusto obcaecati odio?
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ducimus necessitatibus officiis optio
          quaerat qui, reiciendis tempora totam ut veniam. At blanditiis cupiditate dolor dolorum ipsum laboriosam natus
          quisquam quo soluta ut? Accusamus aspernatur at beatae neque nisi possimus rerum!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores aspernatur at debitis delectus
          error excepturi fuga, harum in laboriosam laudantium minus, neque omnis, optio praesentium quidem recusandae
          reiciendis reprehenderit rerum sunt voluptatem.
        </Typography>
      </AsideModal>
    );
  },
};
