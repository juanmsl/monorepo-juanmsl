import { useCallback, useMemo } from 'react';
import { HeaderComponentProps, TableColumn, TableDataGeneric } from './types';

export const TableHeader = <T extends TableDataGeneric>({ columns, defaultHeaderAlign }: HeaderComponentProps<T>) => {
  const renderHeader = useCallback(
    ({ header, headerAlign = defaultHeaderAlign, headerComponent: Header }: TableColumn<T>, key: number) =>
      Header ? (
        <Header key={key} />
      ) : (
        <th key={key} align={headerAlign}>
          {header}
        </th>
      ),
    [defaultHeaderAlign],
  );

  const headersRendered = useMemo(() => columns.map(renderHeader), [columns, renderHeader]);

  return (
    <thead>
      <tr>{headersRendered}</tr>
    </thead>
  );
};
