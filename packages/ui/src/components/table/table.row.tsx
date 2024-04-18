import { useCallback, useMemo, useState } from 'react';

import { Icon } from '../../contexts';

import { RowComponentProps, TableColumn, TableDataGeneric } from './types';

export const TableRow = <T extends TableDataGeneric>({
  id,
  data,
  columns,
  onUpdate,
}: RowComponentProps<T>): React.ReactElement => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState<Partial<T>>(data);
  const [isTouched, setIsTouched] = useState(false);

  const setInternalEditedData = useCallback((data: React.SetStateAction<Partial<T>>) => {
    setEditedData(data);
    setIsTouched(true);
  }, []);

  const toggleEditMode = useCallback(() => {
    if (onUpdate) {
      setEditMode(prev => {
        if (isTouched && prev) {
          setIsTouched(false);
          onUpdate(data, editedData);
        }

        return !prev;
      });
    }
  }, [data, editedData, isTouched, onUpdate]);

  const finalColumns = useMemo(() => {
    const EditColumn: TableColumn<T> = {
      header: '',
      fieldAlign: 'center',
      width: '35px',
      fieldComponent: () => (
        <section className={`edit-cell ${editMode ? 'edit-mode' : ''}`} onClick={toggleEditMode}>
          <Icon name={editMode ? (isTouched ? 'warning' : 'cross') : 'warning'} fill='#666666' />
        </section>
      ),
    };

    return [...columns, ...(onUpdate ? [EditColumn] : [])];
  }, [columns, editMode, isTouched, onUpdate, toggleEditMode]);

  const renderCell = useCallback(
    (column: TableColumn<T>, row: T, key: React.Key) => {
      const {
        field,
        width = 'auto',
        fieldAlign = 'left',
        fieldComponent: Field,
        editable: fieldIsEditable = false,
        editableComponent: EditableComponent,
      } = column;

      if (editMode && onUpdate && (EditableComponent || fieldIsEditable)) {
        if (EditableComponent) {
          return (
            <td key={key} width={width} align={fieldAlign}>
              <EditableComponent data={data} updatedData={editedData} setEditedData={setInternalEditedData} />
            </td>
          );
        }

        if (field) {
          return (
            <td key={key} width={width} align={fieldAlign}>
              <input
                className='field-input-editable'
                value={(editedData[field] as string) ?? ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setInternalEditedData(prev => ({
                    ...prev,
                    [field]: e.target.value,
                  }));
                }}
              />
            </td>
          );
        }
      }

      return Field ? (
        <td key={key} width={width} align={fieldAlign}>
          <Field id={id} data={row} editMode={!!onUpdate && editMode} />
        </td>
      ) : (
        <td key={key} width={width} align={fieldAlign}>
          {field && row[field] ? (row[field] as React.ReactElement) : '- -'}
        </td>
      );
    },
    [data, editMode, onUpdate, editedData, id, setInternalEditedData],
  );

  const renderedRow = useMemo(
    () => finalColumns.map((column, key) => renderCell(column, data, key)),
    [finalColumns, renderCell, data],
  );

  return <tr>{renderedRow}</tr>;
};
