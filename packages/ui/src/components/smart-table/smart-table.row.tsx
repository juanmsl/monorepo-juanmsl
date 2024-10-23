import React from 'react';

import { renderRow } from './smart-table.helpers';
import { SmartRowStyle } from './smart-table.style';
import { ColumnData, RowDataObject } from './smart-table.types';

import { useClassNames } from '@juanmsl/hooks';

type SmartTableRowProps<RowData extends RowDataObject> = {
  data: RowData;
  columns: Array<ColumnData<RowData>>;
  isSelected: boolean;
  selectable: boolean;
  rowKey: React.Key;
};

export const SmartTableRow = <RowData extends RowDataObject>({
  data,
  columns,
  isSelected = false,
  selectable = false,
  rowKey,
}: SmartTableRowProps<RowData>) => {
  const rowClassName = useClassNames({
    'row-selected': selectable && isSelected,
  });

  return <SmartRowStyle className={rowClassName}>{renderRow(data, columns, rowKey)}</SmartRowStyle>;
};
