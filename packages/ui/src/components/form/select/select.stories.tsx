import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgs, UnControlledComponentArgTypes } from '../form.stories.types';

import { Select } from './select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    options: { control: false },
    renderOption: { control: false },
    isEqualComparator: { control: false },
    searchQueryValue: { control: 'text' },
    searchQueryPlaceholder: { control: 'text' },
    onSearchQuery: { control: false },
    loadMore: { control: false },
    isLoading: { control: 'boolean' },
    hasNextPage: { control: 'boolean' },
    maxOptions: { control: { type: 'number' } },
    showClearOption: { control: 'boolean' },
    multiselect: { control: false },
    optionVariant: {
      control: 'select',
      options: [undefined, 'checkbox', 'icon', 'default'],
      if: { arg: 'multiselect' },
    },
  },
  args: {
    label: 'Select',
    searchQueryPlaceholder: 'Search',
    ...UnControlledComponentArgs,
    ...FieldSharedArgs,
    optionVariant: undefined,
  },
  decorators: [ContainerDecorator],
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <Select
        {...args}
        options={[
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ]}
        value={value}
        renderOption={v => v}
        optionVariant={undefined}
        multiselect={false}
        setValue={value => setValue(value)}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
