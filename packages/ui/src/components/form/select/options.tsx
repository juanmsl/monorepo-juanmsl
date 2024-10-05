import { useEventListener, useMediaQuery } from '@juanmsl/hooks';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { InfinityScroll } from '../../infinity-scroll';
import { Modal } from '../../modals';
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
  variant,
}: OptionsProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(`(min-width: ${theme.constants.breakpoints.mobileL})`);
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

  useEventListener('keydown', e => {
    if (['ArrowDown', 'ArrowUp'].includes(e.code)) {
      e.preventDefault();
      const focusedItem = document.activeElement;
      const isListItem = focusedItem?.tagName === 'LI';

      if (isOpen && isListItem) {
        switch (e.code) {
          case 'ArrowDown':
            (focusedItem?.nextSibling as HTMLElement)?.focus();

            break;
          case 'ArrowUp':
            (focusedItem?.previousElementSibling as HTMLElement)?.focus();

            break;
        }
      }
    }
  });

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
        variant={variant}
      />
    ),
    [value, compareValueOrValuesAreEqual, multiselect, unselectOption, selectOption, Component, variant],
  );

  return (
    <Modal
      isOpen={isOpen}
      id='form-select'
      backdrop={isMobile ? 'transparent' : 'blur'}
      opacity={isMobile ? 0 : 0.8}
      zIndex={150}
    >
      <OptionsStyle ref={modalRef} style={{ ...style, zIndex: 150 }} tabIndex={-1}>
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
        <section className='options-list-container' tabIndex={-1}>
          <ul className='options-list' role='listbox'>
            {options.length === 0 ? (
              <li className='option option-empty' tabIndex={-1}>
                <Typography noPadding variant='label'>
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
    </Modal>
  );
};
