import { useState } from 'react';

import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import { Select } from './select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select<string>> = {
  title: 'Form/Select',
  component: Select,
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
  },
  args: {
    label: 'Select',
    searchQueryPlaceholder: 'Search',
    ...FieldSharedArgs,
    placeholder: 'Select an option',
    options: [
      'Leda Pinna',
      'Antonio Sansone',
      'Orlando Simeone',
      'Giorgio Villa',
      'Virgilio Paoli',
      'Nicola Loi',
      'Giordano Manzo',
      'Emilio Galletti',
      'Moira Galimberti',
      'Fedele Spina',
      'Débora Buzzi',
      'Ferrari Sacco',
      'Rosalba Lodi',
      'Bianca Paris',
      'Salvatrice di Paola',
      'Antonietta Mancuso',
      'Corradina Battistini',
      'Elisabeth Annunziata',
      'Federica Vinciguerra',
      'Ennio Spinelli',
      'Susanna Franzoni',
      'Ottavio di Bella',
      'Melania Genovese',
      'Marzio Tomasi',
      'Anselmo Bettoni',
      'Robert Boni',
      'Leonardo Guido',
      'Ermelinda Biagini',
      'Aurélio Falcone',
      'Hubert Paolini',
      'Imelda Sessa',
      'Santino Viviani',
      'Peter Franchini',
      'Guglielmo Lorenzon',
      'Martha Casiraghi',
      'Stefano Cuomo',
      'Valéria di Giovanni',
      'Cecília Ambrosio',
      'Vincenzina Bernardini',
      'Renato Marchi',
      'Raffaello Guida',
      'Gregório Battisti',
      'Alberto Bruni',
      'Giovannino Lepore',
      'Ludovica Randazzo',
      'Iris Merli',
      'Alida Fois',
      'Innocenzo Palazzo',
      'Giacinto Vergani',
      'Alessio Drago',
    ],
    renderOption: v => v,
  },
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof Select<string>>;

export const SingleValue: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

export const MultipleValues: Story = {
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const SearchQuery: Story = {
  render: ({ options, ...args }) => {
    const [value, setValue] = useState<Array<string>>([]);
    const [searchQueryValue, setSearchQueryValue] = useState<string>('');

    return (
      <Select<string>
        {...args}
        options={options.filter(option => option.toLowerCase().includes(searchQueryValue.toLowerCase()))}
        multiselect={true}
        value={value}
        setValue={value => setValue(value)}
        searchQueryPlaceholder='Search option'
        searchQueryValue={searchQueryValue}
        onSearchQuery={setSearchQueryValue}
      />
    );
  },
};

export const SearchQueryWithClearOption: Story = {
  render: ({ options, ...args }) => {
    const [value, setValue] = useState<Array<string>>([]);
    const [searchQueryValue, setSearchQueryValue] = useState<string>('');

    return (
      <Select<string>
        {...args}
        options={options.filter(option => option.toLowerCase().includes(searchQueryValue.toLowerCase()))}
        multiselect={true}
        value={value}
        showClearOption={true}
        setValue={value => setValue(value)}
        searchQueryPlaceholder='Search option'
        searchQueryValue={searchQueryValue}
        onSearchQuery={setSearchQueryValue}
      />
    );
  },
};
