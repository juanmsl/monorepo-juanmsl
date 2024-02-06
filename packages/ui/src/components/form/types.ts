import { FieldError } from 'react-hook-form';
import { IconNameT } from '../../contexts';
import React from 'react';

export type Props = Record<string, unknown>;

// These are the common props that ALL components need to share, ALL of them must have the same props
type CommonInputProps = {
  name: string;
  defaultValue?: unknown;
  className?: string;
  style?: React.CSSProperties;
  autoComplete?: string;
  autoFocus?: boolean;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  rightIcon?: IconNameT;
  leftIcon?: IconNameT;
};

// These are the general props that the controlled components could receive
export type InputControllerProps<T extends Props> = T & CommonInputProps;

// These are the props the controller send to the component
type ControllerHOCProps<V> = {
  name: string;
  value: V;
  setValue: (value: V) => void;
  onBlur?: () => void;
  invalid?: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  error?: FieldError;
};

// These are the general props for the form component, it means ALL props that component could receive
export type InputProps<T extends Props, V> = T & CommonInputProps & ControllerHOCProps<V>;
