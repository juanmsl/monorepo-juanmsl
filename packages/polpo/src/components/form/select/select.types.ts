import React from 'react';

import { InputFieldProps } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

export type SelectItem = string | number | Record<string, unknown> | unknown;

export type MultiValue<T extends SelectItem> = Array<T>;

export type SingleValue<T extends SelectItem> = T | null;

export type SelectValue<T extends SelectItem> = SingleValue<T> | MultiValue<T>;

// SELECT

export type SharedSelectProps<T extends SelectItem> = InputFieldProps<{
  options: Array<T>;
  renderOption: (item: T) => React.ReactNode;
  isEqualComparator?: (a: T, b: T) => boolean;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  onSearchQuery?: (value: string) => void;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  maxOptions?: number;
  showClearOption?: boolean;
  height?: number;
  searchQueryClassName?: string;
  searchQueryStyle?: React.CSSProperties;
}>;

export type MultiSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect: true;
};

export type SingleSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect?: false;
  optionVariant?: never;
};

export type UnControlledSelectProps<T extends SelectItem> =
  | UnControlledComponentProps<MultiSelectProps<T>, MultiValue<T>>
  | UnControlledComponentProps<SingleSelectProps<T>, SingleValue<T>>;

export type ControllerGeneratorSelectProps<T extends SelectItem> =
  | ControllerGeneratorProps<MultiSelectProps<T>, MultiValue<T>>
  | ControllerGeneratorProps<SingleSelectProps<T>, SingleValue<T>>;

// SELECT OPTIONS

export type OptionsProps<T extends SelectItem> = {
  isOpen: boolean;
  onClose: () => void;
  onSearchQuery?: (value: string) => void;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  searchQueryClassName?: string;
  searchQueryStyle?: React.CSSProperties;
  optionIsSelected: (option: T) => boolean;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  options: Array<T>;
  selectOption: (option: T) => void;
  unselectOption: (option: T) => void;
  containerRef: React.RefObject<HTMLElement>;
  Component: React.FC<OptionComponentProps<T>>;
  multiselect?: boolean;
  emptyMessage?: string;
  height?: number;
};

// SELECT OPTION

export type OptionComponentProps<T extends SelectItem> = {
  data: T;
  isSelected: boolean;
  multiselect: boolean;
};
