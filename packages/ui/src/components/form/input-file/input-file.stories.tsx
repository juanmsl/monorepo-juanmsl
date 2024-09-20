import { useState } from 'react';

import { ContainerDecorator, UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { InputFile } from './input-file';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFile> = {
  title: 'Components/Form/InputFile',
  component: InputFile,
  tags: ['autodocs'],
  argTypes: {
    ...UnControlledComponentArgTypes,
    label: { control: 'text' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    limitSize: { control: 'number' },
    errorTimeout: { control: 'number' },
  },
  args: {
    label: 'Input File',
    accept: 'image/*',
    multiple: false,
    limitSize: 5000000,
    errorTimeout: 3000,
    ...UnControlledComponentArgs,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState<{ [key: string]: File }>({});

    return <InputFile {...args} value={value} setValue={setValue} />;
  },
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  args: {},
};
