import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Icon } from '../../icon';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { Field } from '../field';
import { ControllerGeneratorProps } from '../form.types';

import { Options } from './options';
import { SelectStyle } from './select.style';
import {
  ControllerGeneratorSelectProps,
  MultiSelectProps,
  MultiValue,
  OptionComponentProps,
  SelectItem,
  SelectValue,
  SingleSelectProps,
  SingleValue,
  UnControlledSelectProps,
} from './select.types';

export const Select = <T extends SelectItem>({
  // Select props
  options,
  renderOption,
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
  onFocus,
  className = '',
  style = {},
  showClearOption = false,
  height,
  searchQueryStyle,
  searchQueryClassName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocus = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readOnly = false,
  disabled = false,
  placeholder = '',
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
  const containerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openSelect = useCallback(
    (open: boolean) => {
      if (open && !disabled) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [disabled],
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
      <Typography noPadding variant='label' nowrap>
        {renderOption(data)}
      </Typography>
    ),
    [renderOption],
  );

  const renderMultipleValue = useCallback(
    (values: Array<T>): React.ReactNode => {
      if (maxOptions) {
        const limit = Math.min(maxOptions, options.length);

        return `${values.length}/${limit} item${values.length === 1 ? '' : 's'} selected`;
      }

      return `${values.length} item${values.length === 1 ? '' : 's'} selected`;
    },
    [maxOptions, options.length],
  );

  const renderValue = useCallback(
    (value: SelectValue<T>): React.ReactNode => {
      if (value === null) {
        return null;
      }

      if (Array.isArray(value)) {
        return (
          <Typography noPadding nowrap variant='label'>
            {renderMultipleValue(value)}
          </Typography>
        );
      }

      return <OptionComponent data={value} isSelected={false} multiselect={!!multiselect} />;
    },
    [OptionComponent, multiselect, renderMultipleValue],
  );

  const unSelectOption = useCallback(
    (unselectedOption: T) => {
      if (multiselect) {
        const filteredValues = value.filter(item => !compareValuesIsEqual(item, unselectedOption));
        setValue(filteredValues.length === 0 ? [] : filteredValues);
      } else {
        setValue(null);
        setIsOpen(false);
      }
    },
    [compareValuesIsEqual, multiselect, setValue, value],
  );

  const selectOption = useCallback(
    (selectedOption: T) => {
      if (multiselect) {
        if (maxOptions && Array.isArray(value) && value.length >= maxOptions) {
          return;
        }

        setValue([...(value as Array<T>), selectedOption] as MultiValue<T>);
      } else {
        setValue(selectedOption as SingleValue<T>);
        setIsOpen(false);
      }
    },
    [maxOptions, multiselect, setValue, value],
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

  const optionIsSelected = useCallback(
    (option: T) => Boolean(value) && value !== '' && compareValueOrValuesAreEqual(option, value),
    [compareValueOrValuesAreEqual, value],
  );

  return (
    <Field
      id={id}
      error={error}
      isFocus={isOpen}
      onClickLeftIcon={() => openSelect(true)}
      onClickRightIcon={() => openSelect(true)}
      ref={containerRef}
      {...fieldProps}
    >
      <SelectStyle id={name} style={style} onBlur={onBlur} className={`${disabled ? 'disabled' : ''} ${className}`}>
        <section
          className={`select-container ${valueNonEmpty && showClearOption ? 'three-columns' : ''}`}
          onClick={() => openSelect(true)}
        >
          <button
            type='button'
            className={`input-button ${(Array.isArray(value) ? value.length > 0 : value) ? '' : 'placeholder'}`}
            aria-haspopup='listbox'
            aria-expanded={isOpen}
            onFocus={e => {
              openSelect(true);
              onFocus && onFocus(e);
            }}
          >
            {(valueNonEmpty && renderValue(value)) || (
              <Typography variant='label' noPadding nowrap>
                {placeholder}
              </Typography>
            )}
          </button>
          {valueNonEmpty && showClearOption && (
            <section className='icon-close' onClick={clearOption}>
              <Icon name='cross' />
            </section>
          )}
          <Icon name={isOpen ? 'caret-up' : 'caret-down'} />
        </section>
        <Options
          containerRef={containerRef}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          optionIsSelected={optionIsSelected}
          Component={OptionComponent}
          multiselect={multiselect}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          loadMore={loadMore}
          searchQueryValue={searchQueryValue}
          onSearchQuery={onSearchQuery}
          searchQueryPlaceholder={searchQueryPlaceholder}
          options={options}
          selectOption={selectOption}
          unselectOption={unSelectOption}
          height={height}
          searchQueryClassName={searchQueryClassName}
          searchQueryStyle={searchQueryStyle}
        />
      </SelectStyle>
    </Field>
  );
};

const MultiSelectController = <T extends SelectItem>({
  rules,
  ...props
}: ControllerGeneratorProps<MultiSelectProps<T>, MultiValue<T>>) => {
  return (
    <Controller<MultiSelectProps<T>, MultiValue<T>>
      Component={Select}
      defaultValue={[]}
      inputProps={{
        ...props,
        multiselect: true,
      }}
      rules={rules}
    />
  );
};

const SingleSelectController = <T extends SelectItem>({
  rules,
  ...props
}: ControllerGeneratorProps<SingleSelectProps<T>, SingleValue<T>>) => {
  return (
    <Controller<SingleSelectProps<T>, SingleValue<T>>
      Component={Select}
      defaultValue={null}
      inputProps={{
        ...props,
        multiselect: false,
      }}
      rules={rules}
    />
  );
};

const SelectController = <T extends SelectItem>(props: ControllerGeneratorSelectProps<T>) => {
  const { multiselect } = props;

  if (multiselect) {
    return <MultiSelectController<T> {...props} multiselect={true} />;
  }

  return <SingleSelectController<T> {...props} multiselect={false} />;
};

Select.Controller = SelectController;
