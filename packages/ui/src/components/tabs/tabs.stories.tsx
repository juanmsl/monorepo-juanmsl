import { useState } from 'react';

import { Grid } from '../../layouts';
import { Button } from '../buttons';
import { Typography } from '../typography';

import { Tabs } from './tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs/Custom Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => {
    const [selected, setSelected] = useState('');

    const getButtonVariant = (id: string) => {
      return selected === id ? 'solid' : 'ghost';
    };

    return (
      <Tabs defaultOpenTab='tab-1' onChange={setSelected}>
        <Grid flow='column' gap='1em' ai='center'>
          <Tabs.Tab id='tab-1'>
            <Button color='primary' variant={getButtonVariant('tab-1')}>
              Tab 1
            </Button>
          </Tabs.Tab>
          <Tabs.Tab id='tab-2'>
            <Button color='primary' variant={getButtonVariant('tab-2')}>
              Tab 2
            </Button>
          </Tabs.Tab>
          <Tabs.Tab id='tab-3'>
            <Button color='primary' variant={getButtonVariant('tab-3')}>
              Tab 3
            </Button>
          </Tabs.Tab>
        </Grid>

        <Tabs.TabPanel id='tab-1'>
          <Typography variant='header4' align='center'>
            Tab 1 content
          </Typography>
        </Tabs.TabPanel>
        <Tabs.TabPanel id='tab-2'>
          <Typography variant='header4' align='center'>
            Tab 2 content
          </Typography>
        </Tabs.TabPanel>
        <Tabs.TabPanel id='tab-3'>
          <Typography variant='header4' align='center'>
            Tab 3 content
          </Typography>
        </Tabs.TabPanel>
      </Tabs>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};
