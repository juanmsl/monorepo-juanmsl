import React from 'react';

import { InputFieldProps } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

export type SelectItem = string | number | Record<string, unknown> | unknown;

export type MultiValue<T extends SelectItem> = Array<T>;

export type SingleValue<T extends SelectItem> = T | null;

export type SelectValue<T extends SelectItem> = SingleValue<T> | MultiValue<T>;

// SELECT CONTEXT

export type SharedSelectContextValue<T extends SelectItem> = {
  isEqualComparator?: (a: T, b: T) => boolean;
  maxOptions: number | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MultiSelectContextValue<T extends SelectItem> = SharedSelectContextValue<T> & {
  selectedValue: MultiValue<T>;
  setValue: (value: MultiValue<T>) => void;
  multiselect: true;
};

export type SingleSelectContextValue<T extends SelectItem> = SharedSelectContextValue<T> & {
  selectedValue: SingleValue<T>;
  setValue: (value: SingleValue<T>) => void;
  multiselect: false;
};

export type SelectContextValue<T extends SelectItem> = SingleSelectContextValue<T> | MultiSelectContextValue<T>;

// SELECT

export type SharedSelectProps<T extends SelectItem> = InputFieldProps<{
  options: Array<T>;
  renderValue: (value: T) => React.ReactNode;
  isEqualComparator?: (a: T, b: T) => boolean;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  onSearchQuery?: (value: string) => void;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  emptyMessage?: string;
  maxOptions?: number;
  showClearOption?: boolean;
  height?: number;
  searchQueryClassName?: string;
  searchQueryStyle?: React.CSSProperties;
  children?: React.ReactNode;
}>;

export type MultiSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect: true;
};

export type SingleSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
  multiselect?: false;
};

export type UnControlledSelectProps<T extends SelectItem> =
  | UnControlledComponentProps<MultiSelectProps<T>, MultiValue<T>>
  | UnControlledComponentProps<SingleSelectProps<T>, SingleValue<T>>;

export type ControllerGeneratorSelectProps<T extends SelectItem> =
  | ControllerGeneratorProps<MultiSelectProps<T>, MultiValue<T>>
  | ControllerGeneratorProps<SingleSelectProps<T>, SingleValue<T>>;

// SELECT OPTIONS

export type OptionsProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearchQuery?: (value: string) => void;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  searchQueryClassName?: string;
  searchQueryStyle?: React.CSSProperties;
  optionsLength: number;
  containerRef: React.RefObject<HTMLElement>;
  height?: number;
  children?: React.ReactNode;
};

// SELECT OPTION

export type OptionComponentProps<T extends SelectItem> = {
  data: T;
};

export enum OptionType {
  OPTION = 'option',
  LABEL = 'label',
  DIVIDER = 'divider',
}

export type OptionObject<T extends SelectItem> =
  | {
      value: T;
      option: React.ReactNode;
      type: OptionType.OPTION;
    }
  | {
      option: React.ReactNode;
      type: OptionType.LABEL;
    }
  | {
      type: OptionType.DIVIDER;
    };
