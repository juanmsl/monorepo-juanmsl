import { Meta, StoryFn } from '@storybook/react-vite';

import { Grid } from '../../layouts';

import {
  ControlledComponentProps,
  ControlledProps,
  SharedProps,
  UnControlledComponentProps,
  UnControlledProps,
} from './form.types';

export const SharedArgTypes: Meta<SharedProps>['argTypes'] = {
  name: { control: false },
  className: { control: false },
  style: { control: false },
  autoComplete: { control: false },
  autoFocus: { control: 'boolean' },
  placeholder: { control: 'text' },
  disabled: { control: 'boolean' },
  readOnly: { control: 'boolean' },
};

export const UnControlledArgTypes: Meta<UnControlledProps<unknown>>['argTypes'] = {
  value: { control: false },
  invalid: { control: 'boolean' },
  isTouched: { control: 'boolean' },
  isDirty: { control: 'boolean' },
  error: { control: 'text' },
};

export const ControlledArgTypes: Meta<ControlledProps<unknown>>['argTypes'] = {
  defaultValue: { control: false },
};

export const UnControlledComponentArgTypes: Meta<UnControlledComponentProps<{}, unknown>>['argTypes'] = {
  ...SharedArgTypes,
  ...UnControlledArgTypes,
};

export const ControlledComponentArgTypes: Meta<ControlledComponentProps<{}, unknown>>['argTypes'] = {
  ...SharedArgTypes,
  ...ControlledArgTypes,
};

export const ContainerDecorator = (Story: StoryFn) => (
  <Grid gtc='300px'>
    <Story />
  </Grid>
);
