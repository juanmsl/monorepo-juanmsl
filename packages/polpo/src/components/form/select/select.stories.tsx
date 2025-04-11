import { useState } from 'react';

import { Flex, Grid } from '../../../layouts';
import { Icon } from '../../icon';
import { Image } from '../../image';
import { Menu } from '../../modals';
import { Tag } from '../../tag';
import { Typography } from '../../typography';
import { FieldSharedArgs, FieldSharedArgTypes } from '../field/field.stories';
import { ContainerDecorator, UnControlledComponentArgTypes } from '../form.stories.types';

import DataJson from './data.stories.json';
import { Select } from './select';
import { OptionComponentProps } from './select.types';

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
    optionComponent: { control: false },
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
  },
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof Select<string>>;
type StoryItem = StoryObj<typeof Select<DataItem>>;

export const SingleValue: Story = {
  args: {
    options: names,
    children: undefined,
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

export const MultipleValues: Story = {
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

export const GroupedOptions1: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

export const GroupedOptions2: Story = {
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const SearchQuery1: Story = {
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

export const SearchQuery2: Story = {
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

export const CustomSelectedValue: Story = {
  args: {
    valueComponent: ({ value, multiselect }) =>
      multiselect ? (
        <Flex gap='4px' wrap='wrap'>
          {value.map(v => (
            <Tag key={v} size='small'>
              {v}
            </Tag>
          ))}
        </Flex>
      ) : (
        value
      ),
  },
  render: args => {
    const [value, setValue] = useState<Array<string>>([]);

    return <Select<string> {...args} multiselect={true} value={value} setValue={value => setValue(value)} />;
  },
};

export const CustomOptions: Story = {
  args: {
    options: names,
    children: undefined,
    optionComponent: ({ value }) => (
      <Flex gap='1em' jc='center' ai='center'>
        <Icon name='user' />
        <Flex jc='start' flow='column' style={{ padding: '4px 0' }}>
          <Flex gap='5px' jc='start' ai='baseline'>
            <Typography noPadding weight='light' variant='small'>
              First name:
            </Typography>
            <Typography noPadding weight='bold' variant='label'>
              {value.split(' ')[0]}
            </Typography>
          </Flex>
          <Flex gap='5px' jc='start' ai='baseline'>
            <Typography noPadding weight='light' variant='small'>
              Last name:
            </Typography>
            <Typography noPadding weight='bold' variant='label'>
              {value.split(' ')[1]}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    ),
  },
  render: args => {
    const [value, setValue] = useState<string | null>(null);

    return <Select<string> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};

type DataItem = {
  isActive: boolean;
  picture: string;
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  gender: string;
};

const OptionComponent = ({ value }: OptionComponentProps<DataItem>) => (
  <Grid gap='1em' jc='start' gtc='48px 1fr' ai='center'>
    <Grid ai='center' style={{ position: 'relative', padding: '4px' }}>
      <Image src={value.picture} width={40} height={40} />
      <span
        style={{
          display: 'block',
          width: 15,
          height: 15,
          borderRadius: '50%',
          background: value.eyeColor,
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
    </Grid>
    <Grid jc='start'>
      <Typography noPadding weight='bold' variant='label'>
        {value.firstName} {value.lastName}
      </Typography>
      <Typography noPadding weight='light' variant='small'>
        {value.age} years
      </Typography>
    </Grid>
  </Grid>
);

export const Custom: StoryItem = {
  args: {
    options: DataJson,
    children: undefined,
    valueComponent: ({ value, multiselect }) => {
      if (multiselect) {
        return value.length;
      }

      if (value === null) {
        return null;
      }

      return <OptionComponent value={value} />;
    },
    isEqualComparator: (a, b) => a.firstName === b.firstName && a.lastName === b.lastName,
    optionComponent: OptionComponent,
  },
  render: args => {
    const [value, setValue] = useState<DataItem | null>(null);

    return <Select<DataItem> {...args} multiselect={false} value={value} setValue={value => setValue(value)} />;
  },
};
