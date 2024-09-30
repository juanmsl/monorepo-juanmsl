import { useTheme } from 'styled-components';

import { Typography } from '../../components';
import { Grid } from '../grid';

import { SectionLayout } from './section-layout';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionLayout> = {
  title: 'layouts/Section',
  component: SectionLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    outline: true,
  },
  argTypes: {
    children: { control: false },
    className: { control: false },
    contentClassName: { control: false },
    style: { control: false },
    padding: { control: 'text' },
    fitHeightContent: { control: 'boolean' },
    alignContent: { control: 'inline-radio', options: ['start', 'center', 'end', 'space-between'] },
  },
  args: {
    children: 'Hello world',
  },
  render: args => {
    const theme = useTheme();

    return (
      <SectionLayout {...args}>
        <Grid jc='center'>
          <Typography variant='header1'>Section layout</Typography>
          <Typography>Create a section with the min-height and min-width defined in the custom theme</Typography>
          <Typography family='code'>
            min-height: {args.fitHeightContent ? 'auto' : theme.constants.sectionMinHeight}
          </Typography>
          <Typography family='code'>max-width: {theme.constants.breakpoints.laptopL}</Typography>
          <Typography variant='label'>(The Storybook outlines are enabled to see the grid)</Typography>
        </Grid>
      </SectionLayout>
    );
  },
};

export default meta;
type Story = StoryObj<typeof SectionLayout>;

export const Default: Story = {
  args: {},
};
