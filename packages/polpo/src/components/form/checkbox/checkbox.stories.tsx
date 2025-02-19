import { useState } from 'react';

import { ColorVariants } from '../../../core/variants';
import { IconNames } from '../../icon';
import { UnControlledComponentArgTypes } from '../form.stories.types';

import { Checkbox } from './checkbox';

import { SectionLayout } from '@polpo/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    ...UnControlledComponentArgTypes,
    placeholder: { table: { disable: true } },
    label: { control: 'text' },
    icon: { options: [undefined, ...IconNames.toSorted()] },
    color: { control: { type: 'inline-radio', options: Object.values(ColorVariants) } },
  },
  args: {
    label: 'Checkbox',
  },
  render: args => {
    const [value, setValue] = useState(false);

    return <Checkbox {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const MultipleOptions: Story = {
  args: {},
  render: args => {
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);

    return (
      <SectionLayout>
        <Checkbox {...args} value={option1} setValue={setOption1} label='Option 1' />
        <Checkbox {...args} value={option2} setValue={setOption2} label='Option 2' />
        <Checkbox {...args} value={option3} setValue={setOption3} label='Option 3' />
        <Checkbox {...args} value={option4} setValue={setOption4} label='Option 4' />
      </SectionLayout>
    );
  },
};

export const Colors: Story = {
  args: {},
  argTypes: {
    color: { control: false },
  },
  render: args => {
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);
    const [option4, setOption4] = useState(false);
    const [option5, setOption5] = useState(false);
    const [option6, setOption6] = useState(false);
    const [option7, setOption7] = useState(false);

    return (
      <SectionLayout>
        <Checkbox {...args} color='primary' value={option1} setValue={setOption1} label='Primary' />
        <Checkbox {...args} color='secondary' value={option2} setValue={setOption2} label='Secondary' />
        <Checkbox {...args} color='tertiary' value={option3} setValue={setOption3} label='Tertiary' />
        <Checkbox {...args} color='info' value={option4} setValue={setOption4} label='Info' />
        <Checkbox {...args} color='active' value={option5} setValue={setOption5} label='Active' />
        <Checkbox {...args} color='warning' value={option6} setValue={setOption6} label='Warning' />
        <Checkbox {...args} color='alert' value={option7} setValue={setOption7} label='Alert' />
      </SectionLayout>
    );
  },
};
