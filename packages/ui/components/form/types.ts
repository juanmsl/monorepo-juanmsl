import { IconNameT } from 'contexts';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form/dist/types/controller';

export type FieldInputProps = {
  id: string;
  children: React.ReactNode;
  label?: string;
  error?: string;
  rightIcon?: IconNameT;
  onClickRightIcon?: () => void;
  leftIcon?: IconNameT;
  onClickLeftIcon?: () => void;
  isFocus?: boolean;
};

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
  variant?: 'standard' | 'outlined';
  label?: string;
  rightIcon?: IconNameT;
  leftIcon?: IconNameT;
};

// These are the general props that the controlled components could receive
export type InputControllerProps<T extends Record<string, unknown>> = T & CommonInputProps;

// These are the props the controller send to the component
type ControllerHOCProps<V> = {
  name: string;
  value: V;
  setValue: (value: V) => void;
  onBlur?: () => void;
  state?: Partial<ControllerFieldState>;
};

// These are the general props for the form component, it means ALL props that component could receive
export type InputProps<T extends Record<string, unknown>, V> = T & CommonInputProps & ControllerHOCProps<V>;

/* ***************************************
 * SPECIFIC PROPS FOR EACH COMPONENT BELOW
 * ****************************************/

export type InputTextProps = {
  type?: 'email' | 'number' | 'search' | 'tel' | 'text' | 'url' | 'password';
};

export type InputDateProps = {
  type?: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
};

export type DateRange = {
  startDate: string;
  endDate: string;
};

export type InputDateRangeProps = {
  variant?: 'outlined' | 'standard';
  showCalendarIcons?: boolean;
};

export type ColorProps = {};

export type PasswordProps = {};

export type RangeProps = {
  min?: number;
  max?: number;
  step?: number;
};

export type InputFileProps = {
  accept?: string;
  multiple?: boolean;
  limitSize?: number;
  errorTimeout?: number;
  onChange?: never;
};

export type TextareaProps = {
  rows?: number;
  resize?: React.CSSProperties['resize'];
};

export type SelectProps<T> = {
  options: Array<T>;
  renderOption: (item: T) => React.ReactNode;
  renderOptions?: (item: Array<T>) => React.ReactNode;
  isEqualComparator?: (a: T, b: T) => boolean;
  onChange?: never;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  onSearchQuery?: (value: string) => void;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  multiselect?: boolean;
  maxOptions?: number;
  showSelectedOptionsOnTop?: boolean;
};

export type CheckboxProps = {};

export type RadioProps = {
  radioValue: string;
};
