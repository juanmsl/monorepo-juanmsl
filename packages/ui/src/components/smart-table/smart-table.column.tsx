import { useClassNames } from '@juanmsl/hooks';
import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../../layouts';
import { Icon } from '../icon';
import { Ripple } from '../ripple';
import { Typography } from '../typography';

import { SmartColumnStyle } from './smart-table.style';
import { ColumnData, Order, RowDataObject } from './smart-table.types';

type SmartTableColumnProps<RowData extends RowDataObject> = ColumnData<RowData> & {
  toggleSortField: (field: ColumnData<RowData>['sortBy']) => void;
  sortField: ColumnData<RowData>['sortBy'] | null;
  orderField: Order | null;
};

export const SmartTableColumn = <RowData extends RowDataObject>({
  header,
  sortBy,
  icon,
  width,
  field,
  toggleSortField,
  sortField,
  orderField,
}: SmartTableColumnProps<RowData>) => {
  const theme = useTheme();
  const sortByKey = sortBy || field;

  const columnClassName = useClassNames({
    'sort-on-click': Boolean(sortByKey),
  });

  const columnOnClick = sortByKey && (() => toggleSortField(sortByKey));

  const sortIcon = useMemo(() => {
    if (!sortByKey) return null;

    return (
      <span className='sort-icon'>
        {Boolean(sortField) && sortField === sortByKey && (
          <Icon name={orderField === 'asc' ? 'arrow-down' : 'arrow-up'} />
        )}
      </span>
    );
  }, [sortByKey, sortField, orderField]);

  return (
    <SmartColumnStyle style={{ width }} className={columnClassName} onClick={columnOnClick}>
      <Grid flow='column' gap='0.5em' jc='space-between' ai='center'>
        {icon && <Icon name={icon} />}
        <Typography variant='label' noPadding>
          {header}
        </Typography>
        {sortIcon}
      </Grid>
      <Ripple color={theme.colors.text.main} />
    </SmartColumnStyle>
  );
};
