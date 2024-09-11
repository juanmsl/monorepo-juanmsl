import React from 'react';

import { KeyValuesOf } from '../../types';
import { IconNameT } from '../icon';

export type Primitive = string | number | boolean;

export type RowDataObject = { [key: string]: Primitive | object };

export type Order = 'asc' | 'desc';

type ColumnDataCommon<RowData extends RowDataObject> = {
  header: React.ReactNode;
  sortBy?: KeyValuesOf<RowData, Primitive>;
  icon?: IconNameT;
  width?: `${number}px` | `${number}em` | `${number}%`;
};

type ColumnDataField<RowData extends RowDataObject> = ColumnDataCommon<RowData> & {
  field: KeyValuesOf<RowData, Primitive>;
  sortBy?: never;
  render?: never;
  Component?: never;
};

type ColumnDataRender<RowData extends RowDataObject> = ColumnDataCommon<RowData> & {
  field?: never;
  render: (row: RowData, rowKey: React.Key) => React.ReactNode;
  Component?: never;
};

type ColumnDataComponent<RowData extends RowDataObject> = ColumnDataCommon<RowData> & {
  field?: never;
  render?: never;
  Component: React.FC<{ data: RowData; rowKey: React.Key }>;
};

export type ColumnData<RowData extends RowDataObject> =
  | ColumnDataField<RowData>
  | ColumnDataRender<RowData>
  | ColumnDataComponent<RowData>;
