import { useState } from 'react';

import { ColorVariants, SizeVariants } from '../../../core/variants';
import { Grid, SectionLayout } from '../../../layouts';
import { UnControlledComponentArgTypes } from '../form.stories.types';

import { Radio } from './radio';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
    radioValue: { control: false },
    size: { control: 'inline-radio', options: Object.values(SizeVariants) },
    placeholder: { table: { disable: true } },
    color: { control: { type: 'inline-radio', options: Object.values(ColorVariants) } },
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
        <Radio {...args} name='radio' value={value} label='Option B' radioValue='B' setValue={setValue} />
        <Radio {...args} name='radio' value={value} label='Option C' radioValue='C' setValue={setValue} />
        <Radio {...args} name='radio' value={value} label='Option D' radioValue='D' setValue={setValue} />
        <Radio {...args} name='radio' value={value} label='Option E' radioValue='E' setValue={setValue} />
      </Grid>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export const Colors: Story = {
  args: {},
  argTypes: {
    color: { control: false },
  },
  render: args => {
    const [value, setValue] = useState('Primary');

    return (
      <SectionLayout>
        <Radio {...args} color='primary' value={value} setValue={setValue} radioValue='Primary' label='Primary' />
        <Radio {...args} color='secondary' value={value} setValue={setValue} radioValue='Secondary' label='Secondary' />
        <Radio {...args} color='tertiary' value={value} setValue={setValue} radioValue='Tertiary' label='Tertiary' />
        <Radio {...args} color='info' value={value} setValue={setValue} radioValue='Info' label='Info' />
        <Radio {...args} color='active' value={value} setValue={setValue} radioValue='Active' label='Active' />
        <Radio {...args} color='warning' value={value} setValue={setValue} radioValue='Warning' label='Warning' />
        <Radio {...args} color='alert' value={value} setValue={setValue} radioValue='Alert' label='Alert' />
      </SectionLayout>
    );
  },
};
