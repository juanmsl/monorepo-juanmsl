import React, { useCallback, useMemo } from 'react';

import { Icon } from '../../../contexts';
import { useModalInContainer } from '../../../hooks';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { Field } from '../field';
import { ControllerGeneratorProps } from '../form.types';

import { Options } from './options';
import { SelectStyle } from './select.style';
import {
  MultiSelectProps,
  OptionComponentProps,
  SelectItem,
  SelectProps,
  SelectValue,
  SingleSelectProps,
  UnControlledSelectProps,
} from './select.types';

export const Select = <T extends SelectItem>({
  // Select props
  options,
  renderOption,
  renderOptions,
  isEqualComparator,
  searchQueryValue,
  searchQueryPlaceholder,
  onSearchQuery,
  loadMore,
  isLoading,
  hasNextPage,
  multiselect,
  maxOptions,
  // Shared props
  name,
  value,
  setValue,
  onBlur,
  className = '',
  style = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocus = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readOnly = false,
  disabled = false,
  placeholder = 'Select an option',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoComplete = 'off',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDirty = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isTouched = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invalid = false,
  error,
  // Field props
  ...fieldProps
}: UnControlledSelectProps<T>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { modalRef, isVisible, setIsVisible, modalStyle, containerRef } = useModalInContainer({
    position: { x: 0, y: { percentage: 100, pixels: 5 } },
  });

  const openSelect = useCallback(
    (open: boolean) => {
      setIsVisible(open && !disabled);
    },
    [disabled, setIsVisible],
  );

  const compareValuesIsEqual = useCallback(
    (a: T, b: T): boolean => {
      if (['number', 'string'].includes(typeof a)) {
        return a === b;
      }

      return !!isEqualComparator && isEqualComparator(a, b);
    },
    [isEqualComparator],
  );

  const compareValueOrValuesAreEqual = useCallback(
    (a: T, b: SelectValue<T>): boolean => {
      if (b === null) {
        return true;
      }

      if (!Array.isArray(b)) {
        return compareValuesIsEqual(a, b);
      }

      if (['number', 'string'].includes(typeof a)) {
        return b.includes(a);
      }

      return b.some(item => !!isEqualComparator && isEqualComparator(a, item));
    },
    [compareValuesIsEqual, isEqualComparator],
  );

  const OptionComponent = useCallback(
    ({ data }: OptionComponentProps<T>) => (
      <Typography withoutPadding variant='label'>
        {renderOption(data)}
      </Typography>
    ),
    [renderOption],
  );

  const renderMultipleValue = useCallback(
    (values: Array<T>): React.ReactNode => {
      if (renderOptions) {
        return renderOptions(values);
      }

      if (maxOptions) {
        const limit = Math.min(maxOptions, options.length);

        return `${values.length}/${limit} item${values.length === 1 ? '' : 's'} selected`;
      }

      return `${values.length} item${values.length === 1 ? '' : 's'} selected`;
    },
    [maxOptions, options.length, renderOptions],
  );

  const renderValue = useCallback(
    (value: SelectValue<T>): React.ReactNode => {
      if (value === null) {
        return null;
      }

      if (Array.isArray(value)) {
        return renderMultipleValue(value);
      }

      return <OptionComponent data={value} isSelected={false} multiselect={!!multiselect} />;
    },
    [OptionComponent, multiselect, renderMultipleValue],
  );

  const unSelectOption = useCallback(
    (unselectedOption: T) => {
      if (multiselect) {
        const prevValue = Array.isArray(value) ? value : [];
        const filteredValues = prevValue.filter(item => !compareValuesIsEqual(item, unselectedOption));
        setValue(filteredValues.length === 0 ? [] : filteredValues);
      } else {
        setValue(null);
        setIsVisible(false);
      }
    },
    [compareValuesIsEqual, multiselect, setIsVisible, setValue, value],
  );

  const clearOption = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (multiselect) {
        setValue([]);
      } else {
        setValue(null);
      }
    },
    [multiselect, setValue],
  );

  const valueNonEmpty = useMemo(() => {
    if (multiselect) {
      return value.length > 0;
    } else {
      return Boolean(value);
    }
  }, [multiselect, value]);

  return (
    <Field
      id={id}
      error={error}
      isFocus={false}
      onClickLeftIcon={() => openSelect(true)}
      onClickRightIcon={() => openSelect(true)}
      ref={containerRef}
      {...fieldProps}
    >
      <SelectStyle id={name} style={style} onBlur={onBlur} className={`${disabled ? 'disabled' : ''} ${className}`}>
        <section className={`select-container ${valueNonEmpty ? 'with-value' : ''}`} onClick={() => openSelect(true)}>
          <button
            type='button'
            className={`input-button ${value ? '' : 'placeholder'}`}
            aria-haspopup='listbox'
            aria-expanded={isVisible}
            onFocus={() => openSelect(true)}
          >
            {(valueNonEmpty && renderValue(value)) || placeholder}
          </button>
          {valueNonEmpty && (
            <section className='icon-close' onClick={clearOption}>
              <Icon name='cross' />
            </section>
          )}
          <Icon name={isVisible ? 'caret-up' : 'caret-down'} />
        </section>
        <Options
          modalRef={modalRef}
          isOpen={isVisible}
          value={value}
          compareValueOrValuesAreEqual={compareValueOrValuesAreEqual}
          Component={OptionComponent}
          multiselect={multiselect}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          loadMore={loadMore}
          searchQueryValue={searchQueryValue}
          onSearchQuery={onSearchQuery}
          style={{
            width: (containerRef.current?.offsetWidth ?? 0) + 1,
            ...modalStyle,
            left: -1 + parseInt(`${modalStyle?.left ?? 0}`),
          }}
          searchQueryPlaceholder={searchQueryPlaceholder}
          options={options}
          selectOption={(selectedOption: T) => {
            if (multiselect) {
              const prevValue = Array.isArray(value) ? value : [];

              if (maxOptions && prevValue.length >= maxOptions) {
                return;
              }

              setValue([...prevValue, selectedOption]);
            } else {
              setValue(selectedOption);
              setIsVisible(false);
            }
          }}
          unselectOption={unSelectOption}
        />
      </SelectStyle>
    </Field>
  );
};

const SelectController = <T extends SelectItem>({ rules, ...props }: ControllerGeneratorProps<SelectProps<T>>) => {
  if (props.multiselect) {
    return (
      <Controller<MultiSelectProps<T>, Array<T>>
        Component={Select}
        defaultValue={[]}
        inputProps={props}
        rules={rules}
      />
    );
  }

  return (
    <Controller<SingleSelectProps<T>, T | null>
      Component={Select}
      defaultValue={null}
      inputProps={props}
      rules={rules}
    />
  );
};

Select.Controller = SelectController;
