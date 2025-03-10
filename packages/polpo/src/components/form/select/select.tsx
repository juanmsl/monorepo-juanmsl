import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

import { Icon } from '../../icon';
import { InfinityScroll } from '../../infinity-scroll';
import { Menu } from '../../modals';
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
  SelectContextValue,
} from './select.types';

const SelectContext = createContext<SelectContextValue<unknown> | null>(null);

const useSelectContext = <T extends SelectItem>(): SelectContextValue<T> => {
  const context = useContext(SelectContext as React.Context<SelectContextValue<T> | null>);

  if (!context) {
    throw new Error('useSelectContext must be used within a Select component');
  }

  return context;
};

type OptionProps<T extends SelectItem> = {
  children: React.ReactNode;
  value: T;
};

const Option = <T extends SelectItem>({ children, value }: OptionProps<T>) => {
  const { multiselect, isEqualComparator, maxOptions, selectedValue, setValue, setIsOpen } = useSelectContext<T>();

  const compareValuesIsEqual = useCallback(
    (a: T, b: T): boolean => {
      if (['number', 'string'].includes(typeof a)) {
        return a === b;
      }

      return !!isEqualComparator && isEqualComparator(a, b);
    },
    [isEqualComparator],
  );

  const toggleOption = useCallback(
    (isSelected: boolean) => {
      if (isSelected) {
        if (multiselect) {
          if (maxOptions && Array.isArray(selectedValue) && selectedValue.length >= maxOptions) {
            return;
          }

          setValue([...selectedValue, value]);
        } else {
          setValue(value);
          setIsOpen(false);
        }
      } else {
        if (multiselect) {
          setValue(selectedValue.filter(item => !compareValuesIsEqual(item, value)));
        } else {
          setValue(null);
          setIsOpen(false);
        }
      }
    },
    [multiselect, maxOptions, selectedValue, setValue, value, setIsOpen, compareValuesIsEqual],
  );

  const isSelected = useMemo(() => {
    if (selectedValue === '' || selectedValue === null) {
      return false;
    }

    if (!Array.isArray(selectedValue)) {
      return compareValuesIsEqual(value, selectedValue);
    }

    if (['number', 'string'].includes(typeof value)) {
      return selectedValue.includes(value);
    }

    return selectedValue.some(item => !!isEqualComparator && isEqualComparator(value, item));
  }, [compareValuesIsEqual, isEqualComparator, selectedValue, value]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (['Enter', ' '].includes(e.key)) {
        e.preventDefault();

        toggleOption(!(isSelected && multiselect));
      }
    },
    [toggleOption, isSelected, multiselect],
  );

  const optionLabel = useMemo(() => {
    if (typeof children === 'string') {
      return (
        <Typography data-value={value} noPadding variant='label' nowrap>
          {children}
        </Typography>
      );
    }

    return children;
  }, [children, value]);

  return (
    <Menu.Option
      label={optionLabel}
      onKeyDown={handleKeyDown}
      asCheckbox={multiselect}
      selected={isSelected}
      onClick={(selected: boolean) => toggleOption(multiselect ? selected : true)}
    />
  );
};

type OptionLabelProps = {
  children: React.ReactNode;
};

const OptionLabel = ({ children }: OptionLabelProps) => {
  const labelComponent = useMemo(() => {
    if (typeof children === 'string') {
      return (
        <Typography noPadding variant='label' nowrap>
          {children}
        </Typography>
      );
    }

    return children;
  }, [children]);

  return <Menu.GroupLabel>{labelComponent}</Menu.GroupLabel>;
};

export const Select = <T extends SelectItem>({
  // Select props
  options,
  renderValue,
  isEqualComparator,
  searchQueryValue,
  searchQueryPlaceholder,
  onSearchQuery,
  loadMore = () => null,
  isLoading = false,
  hasNextPage = false,
  emptyMessage = 'No options to select',
  multiselect,
  maxOptions,
  children,
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
      setIsOpen(open && !disabled);
    },
    [disabled],
  );

  const OptionComponent = useCallback(
    ({ data }: OptionComponentProps<T>) => (
      <Typography noPadding variant='label' nowrap>
        {renderValue(data)}
      </Typography>
    ),
    [renderValue],
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

  const renderSingleValue = useCallback(
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

      return <OptionComponent data={value} />;
    },
    [OptionComponent, renderMultipleValue],
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

  const renderedOptions = useMemo<React.ReactNode>(() => {
    if (!children)
      return options.map((option, key) => (
        <Select.Option value={option} key={key}>
          <OptionComponent data={option} />
        </Select.Option>
      ));

    return children;
  }, [OptionComponent, children, options]);

  return (
    <SelectContext.Provider
      value={
        {
          selectedValue: value,
          setValue,
          multiselect: multiselect ?? false,
          isEqualComparator,
          maxOptions: maxOptions ?? null,
          setIsOpen,
        } as SelectContextValue<unknown>
      }
    >
      <Field id={id} error={error} isFocus={isOpen} ref={containerRef} {...fieldProps}>
        <SelectStyle id={name} style={style} onBlur={onBlur} className={`${disabled ? 'disabled' : ''} ${className}`}>
          <section
            id={id}
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
              {(valueNonEmpty && renderSingleValue(value)) || (
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
            <Icon className={`select-caret-icon ${isOpen && 'is-select-open'}`} name='caret-down' />
          </section>
          <Options
            containerRef={containerRef}
            isOpen={isOpen}
            onClose={() => openSelect(false)}
            searchQueryValue={searchQueryValue}
            onSearchQuery={onSearchQuery}
            searchQueryPlaceholder={searchQueryPlaceholder}
            optionsLength={Array.isArray(renderedOptions) ? renderedOptions.length : 0}
            height={height}
            searchQueryClassName={searchQueryClassName}
            searchQueryStyle={searchQueryStyle}
          >
            <InfinityScroll
              isLoading={isLoading}
              hasNextPage={hasNextPage}
              loadMore={loadMore}
              emptyMessage={emptyMessage}
            >
              {renderedOptions}
            </InfinityScroll>
          </Options>
        </SelectStyle>
      </Field>
    </SelectContext.Provider>
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
Select.Option = Option;
Select.OptionLabel = OptionLabel;
