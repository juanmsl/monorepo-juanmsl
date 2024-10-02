import { useState } from 'react';

import { Grid } from '../../../layouts';
import { UnControlledComponentArgTypes } from '../form.stories.types';

import { Radio } from './radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
    radioValue: { control: false },
    placeholder: { table: { disable: true } },
  },
  args: {
    label: 'Option A',
    placeholder: undefined,
  },
  render: args => {
    const [value, setValue] = useState('A');

    return (
      <Grid gap='0.4em'>
        <Radio {...args} name='radio' value={value} radioValue='A' setValue={setValue} />
        <Radio name='radio' value={value} label='Option B' radioValue='B' setValue={setValue} />
        <Radio name='radio' value={value} label='Option C' radioValue='C' setValue={setValue} />
        <Radio name='radio' value={value} label='Option D' radioValue='D' setValue={setValue} />
        <Radio name='radio' value={value} label='Option E' radioValue='E' setValue={setValue} />
      </Grid>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
