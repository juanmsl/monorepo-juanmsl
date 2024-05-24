import React, { useCallback, useEffect, useRef, useState } from 'react';

import { InfinityScroll } from '../../infinity-scroll';
import { BaseModal } from '../../modals';
import { Typography } from '../../typography';

import { SelectOption } from './select-option';
import { OptionsHeaderStyle, OptionsStyle } from './select.style';
import { OptionsProps, SelectItem } from './select.types';

export const Options = <T extends SelectItem>({
  onSearchQuery,
  searchQueryValue,
  value,
  compareValueOrValuesAreEqual,
  searchQueryPlaceholder = 'Search option',
  multiselect = false,
  selectOption,
  unselectOption,
  isOpen,
  style,
  options,
  loadMore = () => null,
  isLoading = false,
  hasNextPage = false,
  modalRef,
  Component,
}: OptionsProps<T>) => {
  const [internalSearchQuery, setInternalSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      onSearchQuery && onSearchQuery(value);
      setInternalSearchQuery(value);
    },
    [onSearchQuery],
  );

  useEffect(() => {
    if (isOpen) {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      } else {
        modalRef.current?.focus();
      }
    }
  }, [isOpen, modalRef]);

  const renderInternalOption = useCallback(
    (option: T, key: number) => (
      <SelectOption
        key={key}
        id={`${key}`}
        selected={!!value && value !== '' && compareValueOrValuesAreEqual(option, value)}
        data={option}
        multiselect={multiselect}
        unselectOption={unselectOption}
        selectOption={selectOption}
        Component={Component}
      />
    ),
    [value, compareValueOrValuesAreEqual, Component, multiselect, unselectOption, selectOption],
  );

  return (
    <BaseModal isOpen={isOpen} id='form-select'>
      <OptionsStyle ref={modalRef} style={style} tabIndex={0}>
        {onSearchQuery && (
          <OptionsHeaderStyle>
            <input
              name='query'
              className='input-search'
              value={searchQueryValue ?? internalSearchQuery}
              onChange={handleSearchQuery}
              placeholder={searchQueryPlaceholder}
              onClick={e => e.stopPropagation()}
              ref={searchInputRef}
              autoFocus
            />
          </OptionsHeaderStyle>
        )}
        <section className='options-list-container'>
          <ul className='options-list' role='listbox'>
            {options.length === 0 ? (
              <li className='option option-empty' tabIndex={-1}>
                <Typography withoutPadding variant='label'>
                  No options to select
                </Typography>
              </li>
            ) : (
              <InfinityScroll
                isLoading={isLoading}
                hasNextPage={hasNextPage}
                loadMore={loadMore}
                data={options}
                renderItem={renderInternalOption}
              />
            )}
          </ul>
        </section>
      </OptionsStyle>
    </BaseModal>
  );
};
