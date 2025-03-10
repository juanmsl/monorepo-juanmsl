import { useState } from 'react';

import { Menu } from '../../modals';
import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import { Select } from './select';

import type { Meta, StoryObj } from '@storybook/react';

const groupNamesByFirstLetter = (names: Array<string>): Array<{ letter: string; names: Array<string> }> => {
  const groups: Record<string, Array<string>> = {};

  names.forEach(name => {
    const firstLetter = name[0].toUpperCase();

    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }

    groups[firstLetter].push(name);
  });

  return Object.keys(groups)
    .sort()
    .map(letter => ({
      letter,
      names: groups[letter],
    }));
};

const names = [
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
];

const groupsOfNames = groupNamesByFirstLetter(names);

const renderGroupsOfNames = (groups: Array<{ letter: string; names: Array<string> }>): React.ReactNode => {
  return groups
    .filter(g => g.names.length > 0)
    .map(group => (
      <Menu.Group label={group.letter} key={group.letter}>
        {group.names.map(name => (
          <Select.Option key={name} value={name}>
            {name}
          </Select.Option>
        ))}
      </Menu.Group>
    ));
};

const meta: Meta<typeof Select<string>> = {
  title: 'Form/Select',
  component: Select,
  argTypes: {
    ...FieldSharedArgTypes,
    ...UnControlledComponentArgTypes,
    options: { control: false },
    renderValue: { control: false },
    isEqualComparator: { control: false },
    searchQueryValue: { control: 'text' },
    searchQueryPlaceholder: { control: 'text' },
    onSearchQuery: { control: false },
    loadMore: { control: false },
    isLoading: { control: 'boolean' },
    hasNextPage: { control: 'boolean' },
    maxOptions: { control: { type: 'number' } },
    showClearOption: { control: 'boolean' },
    height: { control: { type: 'range', min: 200, max: 400 } },
    multiselect: { control: false },
    searchQueryClassName: { control: false },
    searchQueryStyle: { control: false },
    children: { control: false },
  },
  args: {
    label: 'Select',
    searchQueryPlaceholder: 'Search',
    ...FieldSharedArgs,
    placeholder: 'Select an option',
    height: 300,
    options: [],
    children: renderGroupsOfNames(groupsOfNames),
    renderValue: v => v,
  },
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof Select<string>>;

export const SimpleOptionsSingleValue: Story = {
  args: {
    options: names,
    children: undefined,
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

export const SimpleOptionsMultipleValues: Story = {
  args: {
    options: names,
    children: undefined,
  },
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const NoOptions: Story = {
  args: {
    children: [],
  },
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const GroupedOptionsSingleValue: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

export const GroupedOptionsMultipleValues: Story = {
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const SearchQuerySingleValue: Story = {
  render: args => {
    const [value, setValue] = useState<string | null>(null);
    const [searchQueryValue, setSearchQueryValue] = useState<string>('');

    return (
      <Select
        {...args}
        value={value}
        multiselect={false}
        setValue={value => setValue(value)}
        searchQueryPlaceholder='Search option'
        searchQueryValue={searchQueryValue}
        onSearchQuery={setSearchQueryValue}
      >
        {renderGroupsOfNames(
          groupsOfNames.map(group => ({
            ...group,
            names: group.names.filter(option => option.toLowerCase().includes(searchQueryValue.toLowerCase())),
          })),
        )}
      </Select>
    );
  },
};

export const SearchQueryMultipleValues: Story = {
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);
    const [searchQueryValue, setSearchQueryValue] = useState<string>('');

    return (
      <Select<string>
        {...args}
        multiselect={true}
        value={value}
        setValue={value => setValue(value)}
        searchQueryPlaceholder='Search option'
        searchQueryValue={searchQueryValue}
        onSearchQuery={setSearchQueryValue}
      >
        {renderGroupsOfNames(
          groupsOfNames.map(group => ({
            ...group,
            names: group.names.filter(option => option.toLowerCase().includes(searchQueryValue.toLowerCase())),
          })),
        )}
      </Select>
    );
  },
};
