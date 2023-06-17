import { Meta, StoryObj } from '@storybook/react';
import { IconProvider, Table, TableColumn } from '@juanmsl/ui';
import { action } from '@storybook/addon-actions';
import { useCallback, useState } from 'react';

type UserEntity = {
  id: number;
  firstName: string;
  secondName?: string;
  lastnames: string;
  website?: string;
  profilePicture: string;
};

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    data: {
      control: false,
      description: 'The data array that should be used for the table',
    },
    columns: {
      control: false,
      description: 'Configuration for each column on the table, how them should be rendered and its behaviour',
    },
    withoutHeader: {
      control: 'boolean',
      description: "Remove column's headers or not",
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      description: 'Set the width of the table on 100% or auto',
      defaultValue: false,
    },
    height: {
      control: 'text',
      description: 'Set the height for the table',
      defaultValue: 'auto',
    },
    allowSelection: {
      control: 'inline-radio',
      options: [false, true, 'many'],
      description: 'Allow developer choose if the table should select a single value or many values',
      defaultValue: false,
    },
    headersAlignment: {
      control: 'inline-radio',
      options: ['left', 'center', 'right'],
      description: 'Allow developer choose if the table should select a single value or many values',
      defaultValue: 'left',
    },
    emptyMessage: {
      control: 'text',
      description: 'Set the message when the table is empty',
      defaultValue: 'No data to show',
    },
    rowId: {
      control: false,
      description:
        'Set the field of the object that should be used for the "key" render, example: user_id. This should be a field of type string or number of the respective object in the "data" array',
      defaultValue: 'The index of the item in the data array',
    },
    className: {
      control: false,
      description: 'Class names to style the main container of the table',
      defaultValue: '',
    },
    style: {
      control: false,
      description: 'Style object to style the main container of the table',
      defaultValue: {},
    },
    isLoading: {
      control: 'boolean',
      description: 'Determine if the data is loading to show a loader at the end of the table',
      defaultValue: false,
    },
    hasNextPage: {
      control: 'boolean',
      description:
        'If the data is paginated, this allow to the infinite scroll of the table know if there are more pages to load',
      defaultValue: false,
    },
  },
  args: {
    data: [],
    columns: [
      {
        header: '',
        fieldComponent: ({ data }) => <img src={data.profilePicture} alt={`${data.id}`} />,
      },
      {
        header: 'Names',
        fieldComponent: ({ data }) => `${data.firstName} ${data.secondName}`.trim(),
      },
      { header: 'Lastnames', field: 'lastnames' },
      { field: 'website', header: 'Website', editable: true },
    ] as Array<TableColumn<UserEntity>>,
    withoutHeader: false,
    fullWidth: false,
    height: '400px',
    allowSelection: false,
    headersAlignment: 'left',
    emptyMessage: 'No users loaded',
    isLoading: false,
    hasNextPage: false,
    onRowUpdate: action('onRowUpdate'),
  },
  render: (args) => {
    const TableWrapper = () => {
      const [data, setData] = useState(args.data);

      const handleUpdate = useCallback((data: UserEntity) => {
        setData((prev) => prev.map((item) => (item.id === data.id ? data : item)));
      }, []);

      return (
        <IconProvider>
          <Table<UserEntity> {...args} data={data} onRowUpdate={handleUpdate} />
        </IconProvider>
      );
    };

    return <TableWrapper />;
  },
} as Meta<typeof Table<UserEntity>>;

type Template = StoryObj<typeof Table<UserEntity>>;

export const Data: Template = {
  args: {
    data: [
      {
        id: 1,
        firstName: 'Juan',
        secondName: 'Manuel',
        lastnames: 'Sánchez Lozano',
        website: 'https://juanmsl.com',
        profilePicture: 'https://via.placeholder.com/30/92c952',
      },
      {
        id: 2,
        firstName: 'Lina',
        secondName: 'Maria',
        lastnames: 'Nieto Gómez',
        profilePicture: 'https://via.placeholder.com/30/532431',
      },
    ],
  },
};

export const Empty: Template = {
  args: {},
};
