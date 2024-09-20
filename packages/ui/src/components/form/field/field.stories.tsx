import { fn } from '@storybook/test';

import { IconNames } from '../../icon';
import { ContainerDecorator } from '../form.stories.types';

import { Field } from './field';

import type { Meta, StoryObj } from '@storybook/react';

export const FieldSharedArgTypes: Meta<typeof Field>['argTypes'] = {
  label: { control: 'text' },
  rightIcon: { options: [undefined, ...IconNames.toSorted()] },
  leftIcon: { options: [undefined, ...IconNames.toSorted()] },
  errorIcon: { options: [undefined, ...IconNames.toSorted()] },
  variant: { control: 'select', options: [undefined, 'full-border', 'content-border', 'line'] },
};

export const FieldSharedArgs: StoryObj<typeof Field>['args'] = {
  errorIcon: undefined,
  variant: 'full-border',
  onClickLeftIcon: fn(),
  onClickRightIcon: fn(),
  leftIcon: undefined,
  rightIcon: undefined,
};

const meta: Meta<typeof Field> = {
  title: 'Components/Form/Field',
  component: Field,
  tags: ['autodocs'],
  includeStories: ['Default'],
  excludeStories: /.*Shared*$/,
  argTypes: {
    ...FieldSharedArgTypes,
    id: { control: false },
    error: { control: 'text' },
    isFocus: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    label: 'Field label',
    children: 'Hello world',
    isFocus: false,
    error: '',
    ...FieldSharedArgs,
    leftIcon: 'facebook',
    rightIcon: 'airplane',
  },
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {},
};
