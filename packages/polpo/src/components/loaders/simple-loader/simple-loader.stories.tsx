import { Grid } from '../../../layouts';

import { LoaderIcons, SimpleLoader } from './simple-loader';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof SimpleLoader> = {
  title: 'SimpleLoader',
  component: SimpleLoader,
  argTypes: {
    icon: {
      control: {
        type: 'radio',
        options: Object.values(LoaderIcons),
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof SimpleLoader>;

export const Default: Story = {
  args: {},
};

export const All: Story = {
  argTypes: {
    icon: { control: false },
  },
  parameters: {
    layout: 'padded',
  },
  render: args => (
    <Grid gtc='repeat(auto-fit, 100px)' gtr='auto auto' pc='center' gap='3em'>
      {Object.values(LoaderIcons).map(icon => (
        <SimpleLoader key={icon} {...args} icon={icon} />
      ))}
    </Grid>
  ),
};
