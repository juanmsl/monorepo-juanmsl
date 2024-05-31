import React from 'react';

import { KeyValuesOf } from '../../types';

type Alignment = 'left' | 'center' | 'right';

export type TableDataGeneric = Record<string, unknown>;

export type RowComponentProps<T extends TableDataGeneric> = {
  id: string;
  data: T;
  columns: Array<TableColumn<T>>;
  onUpdate: ((data: T, updatedData: Partial<T>) => void) | undefined;
};

export type HeaderComponentProps<T extends TableDataGeneric> = {
  columns: Array<TableColumn<T>>;
  defaultHeaderAlign: Alignment;
};

export type FieldComponentProps<T extends TableDataGeneric> = {
  data: T;
  editMode: boolean;
  id: string;
};

export type EditableFieldComponentProps<T extends TableDataGeneric> = {
  data: T;
  updatedData: Partial<T>;
  setEditedData: (data: T) => void;
};

export type TableColumn<T extends TableDataGeneric> = {
  header: string;
  headerAlign?: Alignment;
  headerComponent?: React.FC;
  field?: KeyValuesOf<T, string | number>;
  fieldAlign?: Alignment;
  fieldComponent?: React.FC<FieldComponentProps<T>>;
  editable?: boolean;
  editableComponent?: React.FC<EditableFieldComponentProps<T>>;
  width?: string;
};

export type TableProps<T extends TableDataGeneric> = {
  data: Array<T>;
  columns: Array<TableColumn<T>>;
  emptyMessage?: string;
  rowId?: KeyValuesOf<T, React.Key>;
  className?: string;
  style?: React.CSSProperties;
  height?: string;
  isLoading?: boolean;
  hasNextPage?: boolean;
  loadMore?: () => void;
  withoutHeader?: boolean;
  onRowUpdate?: (data: T, updatedData: Partial<T>) => void;
  onChange?: (data: Array<T>) => void;
  allowSelection?: boolean | 'many';
  headersAlignment?: Alignment;
  fullWidth?: boolean;
};
