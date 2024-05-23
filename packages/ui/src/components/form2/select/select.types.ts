import React from 'react';

import { InputFieldProps } from '../field';
import { UnControlledComponentProps } from '../form.types';

export type SelectItem = string | number | Record<string, unknown>;

export type MultiValue<T extends SelectItem> = Array<T>;

export type SingleValue<T extends SelectItem> = T | null;

export type SelectValue<T extends SelectItem> = MultiValue<T> | SingleValue<T>;

// SELECT

export type SharedSelectProps<T extends SelectItem> = InputFieldProps<{
  options: Array<T>;
  renderOption: (item: T) => React.ReactNode;
  renderOptions?: (item: Array<T>) => React.ReactNode;
  isEqualComparator?: (a: T, b: T) => boolean;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  onSearchQuery?: (value: string) => void;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  maxOptions?: number;
}>;

export type MultiSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect: true;
};

export type SingleSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect?: false;
};

export type SelectProps<T extends SelectItem> = MultiSelectProps<T> | SingleSelectProps<T>;

export type UnControlledSelectProps<T extends SelectItem> =
  | UnControlledComponentProps<MultiSelectProps<T>, MultiValue<T>>
  | UnControlledComponentProps<SingleSelectProps<T>, SingleValue<T>>;

// SELECT OPTIONS

export type OptionsProps<T extends SelectItem> = {
  isOpen: boolean;
  style?: React.CSSProperties;
  onSearchQuery?: (value: string) => void;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  compareValueOrValuesAreEqual: (a: T, b: SelectValue<T>) => boolean;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  options: Array<T>;
  selectOption: (option: T) => void;
  unselectOption: (option: T) => void;
  modalRef: React.RefObject<HTMLElement>;
  Component: React.FC<OptionComponentProps<T>>;
  multiselect?: boolean;
  value: SelectValue<T>;
};

// SELECT OPTION

export type OptionComponentProps<T> = {
  data: T;
  isSelected: boolean;
  multiselect: boolean;
};

export type SelectOptionProps<T> = {
  id: string;
  selected: boolean;
  selectOption: (value: T) => void;
  unselectOption: (value: T) => void;
  data: T;
  multiselect: boolean;
  Component: React.FC<OptionComponentProps<T>>;
};
