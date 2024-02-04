import { Icon } from '../../contexts';
import { InfinityScroll } from '../infinity-scroll';
import { TableHeader } from './table.header';
import { TableRow } from './table.row';
import { TableStyle } from './table.style';
import { TableColumn, TableDataGeneric, TableProps } from './types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const Table = <T extends TableDataGeneric>({
  data,
  columns,
  emptyMessage = 'No data to show',
  rowId,
  height = 'auto',
  className = '',
  style = {},
  withoutHeader = false,
  isLoading = false,
  hasNextPage = false,
  loadMore = () => null,
  onRowUpdate,
  allowSelection = false,
  onChange = () => null,
  headersAlignment = 'left',
  fullWidth = false,
}: TableProps<T>): React.ReactElement => {
  const [selectedValues, setSelectedValues] = useState<Record<string, T>>({});

  useEffect(() => {
    onChange(Object.values(selectedValues));
  }, [onChange, selectedValues]);

  const selectValue = useCallback(
    (id: string, isSelected: boolean, item: T) => {
      if (isSelected) {
        setSelectedValues((prev) => {
          if (allowSelection === 'many') {
            return {
              ...prev,
              [id]: item,
            };
          }

          return allowSelection ? { [id]: item } : prev;
        });
      } else {
        setSelectedValues((prev) => {
          const copy = { ...prev };
          delete copy[id];

          return copy;
        });
      }
    },
    [allowSelection],
  );

  const finalColumns = useMemo(() => {
    const SelectColumn: TableColumn<T> = {
      header: '',
      fieldAlign: 'center',
      width: '35px',
      fieldComponent: ({ id, data }) => (
        <input
          id={id}
          type="checkbox"
          checked={id in selectedValues}
          onChange={(e) => {
            selectValue(id, e.target.checked, data);
          }}
        />
      ),
    };

    return [...(allowSelection ? [SelectColumn] : []), ...columns];
  }, [allowSelection, columns, selectValue, selectedValues]);

  useEffect(() => {
    const selectedKeys = Object.keys(selectedValues);

    if (allowSelection === true && selectedKeys.length > 1) {
      setSelectedValues({
        [selectedKeys[0]]: selectedValues[selectedKeys[0]],
      });
    }
  }, [allowSelection, selectedValues]);

  const renderRow = useCallback(
    (item: T, key: number) => {
      const rowKey = `${rowId ? (item[rowId] as string | number) : key}`;

      return <TableRow id={rowKey} data={item} columns={finalColumns} key={rowKey} onUpdate={onRowUpdate} />;
    },
    [finalColumns, onRowUpdate, rowId],
  );

  return (
    <TableStyle height={height} fullWidth={fullWidth} className={className} style={style}>
      <table>
        {withoutHeader ? null : <TableHeader columns={finalColumns} defaultHeaderAlign={headersAlignment} />}
        <tbody>
          {data.length > 0 ? (
            <InfinityScroll
              isLoading={isLoading}
              hasNextPage={hasNextPage}
              loadMore={loadMore}
              data={data}
              renderItem={renderRow}
              customLoadMoreElement={(ref) => (
                <tr ref={ref as React.LegacyRef<HTMLTableRowElement>}>
                  <td colSpan={finalColumns.length} align="center">
                    {isLoading && <Icon name="spinner" className="loading--icon" />}
                  </td>
                </tr>
              )}
            />
          ) : (
            <tr>
              <td colSpan={finalColumns.length} align="center">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableStyle>
  );
};
