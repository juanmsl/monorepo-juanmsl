import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { Menu } from '../../modals/menu';

import { OptionsHeaderStyle } from './select.style';
import { OptionsProps } from './select.types';

import { useEventListener, useMediaQuery, useResizeObserver } from '@polpo/hooks';

type UseDynamicHeight = {
  height: number;
  containerRef: RefObject<HTMLElement>;
  modalRef: RefObject<HTMLElement>;
  optionsGroupRef: RefObject<HTMLElement>;
  optionsLength: number;
  offset: number;
  windowOffset: number;
};

const useDynamicHeight = ({
  height,
  containerRef,
  modalRef,
  optionsGroupRef,
  optionsLength,
  offset,
  windowOffset,
}: UseDynamicHeight) => {
  const [maxHeight, setMaxHeight] = useState<string>(`${height}px`);
  const [minHeight, setMinHeight] = useState<string | undefined>(undefined);

  const getMaxHeight = useCallback(() => {
    const containerBottom = containerRef.current?.getBoundingClientRect().bottom ?? 0;
    const modalTop = modalRef.current?.getBoundingClientRect().top ?? 0;
    const modalHeight = modalRef.current?.getBoundingClientRect().height ?? 0;
    const optionsHeight = optionsGroupRef.current?.scrollHeight ?? 0;

    const maxHeight = Math.min(window.innerHeight - containerBottom - offset - windowOffset, height);
    const newHeight = Math.min(window.innerHeight - modalTop - offset - windowOffset, height);
    const minHeight =
      optionsLength <= 1
        ? modalHeight
        : optionsHeight > height
          ? Math.min(100, window.innerHeight - windowOffset * 2)
          : 100;

    setMaxHeight(`${Math.round(maxHeight > 150 ? maxHeight : newHeight)}px`);
    setMinHeight(`${Math.round(minHeight)}px`);
  }, [containerRef, height, modalRef, offset, optionsGroupRef, optionsLength, windowOffset]);

  useResizeObserver(containerRef, getMaxHeight);
  useEventListener('resize', getMaxHeight);

  return { maxHeight, minHeight };
};

export const Options = ({
  onSearchQuery,
  searchQueryValue,
  searchQueryPlaceholder = 'Search option',
  searchQueryClassName = '',
  searchQueryStyle = {},
  isOpen,
  optionsLength,
  containerRef,
  onClose,
  height = 300,
  children,
}: OptionsProps) => {
  const theme = useTheme();
  const optionsGroupRef = useRef<HTMLUListElement>(null);
  const modalRef = useRef<HTMLElement>(null);
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

  const { minHeight, maxHeight } = useDynamicHeight({
    height,
    containerRef,
    modalRef,
    optionsGroupRef,
    optionsLength,
    offset: 5,
    windowOffset: 10,
  });

  return (
    <Menu
      id='form-select'
      isOpen={isOpen}
      onClose={onClose}
      backdrop={isMobile ? 'blur' : 'transparent'}
      opacity={isMobile ? 0.8 : 0.4}
      position={isMobile ? 'center' : 'bottom'}
      offset={5}
      windowOffset={10}
      modalRef={modalRef}
      menuContentRef={optionsGroupRef}
      transitionDuration={200}
      containerRef={isMobile ? undefined : containerRef}
      contentStyle={{
        overflow: 'initial',
      }}
      style={
        isMobile
          ? {
              maxHeight: window.innerHeight - 100,
              width: window.innerWidth - 100,
            }
          : {
              minHeight,
              maxHeight,
              width: containerRef.current?.offsetWidth ?? 'auto',
            }
      }
    >
      {onSearchQuery && (
        <OptionsHeaderStyle className={searchQueryClassName} style={searchQueryStyle}>
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
      {children}
    </Menu>
  );
};
