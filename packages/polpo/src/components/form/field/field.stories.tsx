import { IconNames } from '../../icon';
import { ContainerDecorator } from '../form.stories.types';

import { Field } from './field';
import { FieldOrientation, FieldVariant } from './field.types';

import type { Meta, StoryObj } from '@storybook/react';

export const FieldSharedArgTypes: Meta<typeof Field>['argTypes'] = {
  label: { control: 'text' },
  rightIcon: { options: [undefined, ...IconNames.toSorted()] },
  leftIcon: { options: [undefined, ...IconNames.toSorted()] },
  errorIcon: { options: [undefined, ...IconNames.toSorted()] },
  fieldOrientation: { control: 'inline-radio', options: Object.values(FieldOrientation) },
  variant: { control: 'select', options: [undefined, ...Object.values(FieldVariant)] },
};

export const FieldSharedArgs: StoryObj<typeof Field>['args'] = {
  variant: 'full-border',
};

const meta: Meta<typeof Field> = {
  title: 'Form/Field',
  component: Field,
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
    fieldOrientation: 'vertical',
  },
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {},
};
