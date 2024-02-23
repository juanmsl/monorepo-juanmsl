import { Field } from '../field';
import { InputProps } from '../types';
import { Options } from './options';
import { StyledSelect } from './select.style';
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';

type SelectProps<T> = {
  options: Array<T>;
  renderOption: (item: T) => React.ReactNode;
  renderOptions?: (item: Array<T>) => React.ReactNode;
  isEqualComparator?: (a: T, b: T) => boolean;
  onChange?: never;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  onSearchQuery?: (value: string) => void;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  multiselect?: boolean;
  maxOptions?: number;
  showSelectedOptionsOnTop?: boolean;
};

export const Select = <T extends string | number | Record<string, unknown> | unknown>({
  name,
  className = '',
  style = {},
  onBlur,
  value,
  disabled = false,
  leftIcon,
  rightIcon = 'caret-right',
  placeholder = 'Select an option',
  label,
  renderOption,
  renderOptions,
  isEqualComparator,
  error,
  maxOptions = 4,
  options,
  setValue,
  onSearchQuery,
  searchQueryPlaceholder,
  searchQueryValue,
  loadMore,
  hasNextPage,
  isLoading,
  showSelectedOptionsOnTop,
  multiselect,
}: InputProps<SelectProps<T>, '' | T | Array<T>>) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [optionsPosition, setOptionsPosition] = useState<DOMRect | undefined>();

  const openSelect = useCallback(
    (open: boolean) => {
      setIsOpen(open && !disabled);
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
    (a: T, b: T | Array<T>): boolean => {
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

  const renderSingleValue = useCallback((value: T): React.ReactNode => renderOption(value), [renderOption]);

  const renderMultipleValue = useCallback(
    (values: Array<T>): React.ReactNode => {
      if (renderOptions) {
        return renderOptions(values);
      }

      return `${values.length}/${maxOptions} item${values.length === 1 ? '' : 's'} selected`;
    },
    [maxOptions, renderOptions],
  );

  const renderValue = useCallback(
    (value: T | Array<T>): React.ReactNode => {
      if (Array.isArray(value)) {
        return renderMultipleValue(value);
      }

      return renderSingleValue(value);
    },
    [renderMultipleValue, renderSingleValue],
  );

  useEffect(() => {
    const handleListener = (event: Event) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        openSelect(false);
      }
    };

    document.addEventListener('click', handleListener);
    document.addEventListener('focusout', handleListener);

    return () => {
      document.removeEventListener('click', handleListener);
    };
  }, [divRef, isOpen, openSelect]);

  useEffect(() => {
    if (isOpen) {
      divRef.current && setOptionsPosition(divRef.current.getClientRects()[0]);
    }
  }, [isOpen]);

  return (
    <StyledSelect
      id={name}
      style={style}
      ref={divRef}
      onBlur={onBlur}
      className={`${disabled ? 'disabled' : ''} ${className}`}
    >
      <Field
        id={id}
        label={label}
        leftIcon={leftIcon}
        onClickLeftIcon={() => openSelect(true)}
        rightIcon={rightIcon}
        onClickRightIcon={() => openSelect(true)}
        error={error?.message}
      >
        <section className='input-container'>
          <button
            type='button'
            className={`input-button ${!!value && value !== '' ? '' : 'placeholder'}`}
            aria-haspopup='listbox'
            aria-expanded={isOpen}
            onFocus={() => openSelect(true)}
            onClick={() => openSelect(true)}
          >
            {(!!value && value !== '' && renderValue(value)) || placeholder}
          </button>
          <Options
            isOpen={isOpen}
            setIsOpen={value => openSelect(value)}
            placeholder={placeholder}
            value={value}
            compareValueOrValuesAreEqual={compareValueOrValuesAreEqual}
            renderSingleValue={renderSingleValue}
            renderValue={renderValue}
            multiselect={multiselect}
            name={name}
            showSelectedOptionsOnTop={showSelectedOptionsOnTop}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            loadMore={loadMore}
            searchQueryValue={searchQueryValue}
            onSearchQuery={onSearchQuery}
            optionsPosition={optionsPosition}
            searchQueryPlaceholder={searchQueryPlaceholder}
            setValue={setValue}
            options={options}
            selectOption={(selectedOption: T) => {
              if (multiselect) {
                const prevValue = Array.isArray(value) ? value : [];

                if (prevValue.length >= maxOptions) {
                  return;
                }

                setValue([...prevValue, selectedOption]);
              } else {
                setValue(selectedOption);
                setIsOpen(false);
              }
            }}
            unselectOption={(unselectedOption: T) => {
              if (multiselect) {
                const prevValue = Array.isArray(value) ? value : [];
                const filteredValues = prevValue.filter(item => !compareValuesIsEqual(item, unselectedOption));
                setValue(filteredValues.length === 0 ? '' : filteredValues);
              } else {
                setValue('');
              }
            }}
          />
        </section>
      </Field>
    </StyledSelect>
  );
};
