import { useState } from 'react';

import { Button } from '../../buttons';
import { Image } from '../../image';
import { Typography } from '../../typography';

import { AsideModal } from './aside-modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AsideModal> = {
  title: 'Components/Modals/AsideModal',
  component: AsideModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: false },
    onClose: { control: false },
    position: { control: 'inline-radio', options: ['left', 'right', 'top', 'bottom'] },
    closeButton: { control: 'inline-radio', options: ['fixed', 'relative'] },
    children: { control: 'text' },
    size: { control: { type: 'range', min: 100, max: 500, step: 10 } },
    className: { control: false },
    style: { control: false },
    zIndex: { control: false },
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
    return <AsideModal {...args} isOpen={isOpen} onClose={onClose} />;
  },
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
  render: (args, { isOpen, onClose }) => {
    return (
      <AsideModal {...args} isOpen={isOpen} onClose={onClose}>
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
