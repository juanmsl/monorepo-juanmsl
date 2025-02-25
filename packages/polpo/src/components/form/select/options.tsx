import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { Menu } from '../../modals';

import { OptionsHeaderStyle, OptionsMenuStyle } from './select.style';
import { OptionsProps, SelectItem } from './select.types';

import { useClassNames, useEventListener, useMediaQuery, useResizeObserver } from '@polpo/hooks';

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
  options,
  loadMore = () => null,
  isLoading = false,
  hasNextPage = false,
  containerRef,
  Component,
  onClose,
  emptyMessage = 'No options to select',
  maxHeight = 400,
}: OptionsProps<T>) => {
  const theme = useTheme();
  const modalContainerRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery(`(max-width: ${theme.constants.breakpoints.mobileL})`);
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
        modalContainerRef.current?.focus();
      }
    }
  }, [isOpen, modalContainerRef]);

  const optionIsSelected = useCallback(
    (option: T) => !!value && value !== '' && compareValueOrValuesAreEqual(option, value),
    [compareValueOrValuesAreEqual, value],
  );

  const handleKeyDown = useCallback(
    (option: T) => (e: React.KeyboardEvent) => {
      if (['Enter', ' '].includes(e.key)) {
        e.preventDefault();

        const selected = optionIsSelected(option);

        if (selected && multiselect) {
          unselectOption(option);
        } else {
          selectOption(option);
        }
      }
    },
    [multiselect, selectOption, optionIsSelected, unselectOption],
  );

  const renderInternalOption = useCallback(
    (option: T, key: number) => {
      const selected = optionIsSelected(option);

      return (
        <Menu.Option
          key={key}
          id={`${key}`}
          label={<Component data={option} isSelected={selected} multiselect={multiselect} />}
          onClick={(selected: boolean) => {
            if (multiselect) {
              if (selected) selectOption(option);
              else unselectOption(option);
            } else {
              selectOption(option);
            }
          }}
          onKeyDown={handleKeyDown(option)}
          asCheckbox={multiselect}
          selected={selected}
        />
      );
    },
    [optionIsSelected, Component, multiselect, handleKeyDown, selectOption, unselectOption],
  );

  const [height, setHeight] = useState<string>('400px');

  const getHeight = useCallback(() => {
    const containerBottom = containerRef.current?.getBoundingClientRect().bottom ?? 0;

    const height = Math.min(window.innerHeight - containerBottom - 20, maxHeight);

    setHeight(`${Math.round(height)}px`);
  }, [containerRef, maxHeight]);

  useResizeObserver(containerRef, getHeight);
  useEventListener('resize', getHeight);

  const menuClassName = useClassNames({
    'search-input': Boolean(onSearchQuery),
  });

  return (
    <OptionsMenuStyle
      id='form-select'
      isOpen={isOpen}
      onClose={onClose}
      backdrop={isMobile ? 'blur' : 'opaque'}
      opacity={isMobile ? 0.8 : 0.4}
      position={isMobile ? 'center' : 'bottom'}
      offset={5}
      transitionDuration={200}
      containerRef={isMobile ? undefined : containerRef}
      className={menuClassName}
      style={
        isMobile
          ? {
              maxHeight: window.innerHeight - 100,
              width: window.innerWidth - 100,
            }
          : {
              maxHeight: height,
              minHeight: '200px',
              width: containerRef.current?.offsetWidth ?? 'auto',
            }
      }
      rootStyle={isMobile ? {} : {}}
    >
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
      <Menu.OptionsGroup
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        loadMore={loadMore}
        data={options}
        renderItem={renderInternalOption}
        emptyMessage={emptyMessage}
      />
    </OptionsMenuStyle>
  );
};
