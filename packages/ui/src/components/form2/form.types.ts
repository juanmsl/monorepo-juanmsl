import React from 'react';
import { UseControllerProps } from 'react-hook-form/dist/types/controller';

export type Props = Record<string, unknown>;

export type SharedProps = {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  autoComplete?: string;
  autoFocus?: boolean;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

export type UnControlledProps<V> = {
  value: V;
  setValue: (value: V) => void;
  onBlur?: () => void;
  invalid?: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  error?: string;
};

export type ControlledProps = {
  defaultValue?: unknown;
};

export type UnControlledComponentProps<T extends Props, V> = T & SharedProps & UnControlledProps<V>;

export type ControlledComponentProps<T extends Props> = T & SharedProps & ControlledProps;

export type ControllerGeneratorProps<T extends Props> = ControlledComponentProps<T> &
  Partial<Pick<UseControllerProps, 'rules'>>;
