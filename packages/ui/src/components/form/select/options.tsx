import { useCallback } from 'react';

import { InfinityScroll } from '../../infinity-scroll';

import { OptionsHeader } from './options-header';
import { SelectOption } from './select-option';
import { OptionsStyle } from './select.style';

type OptionsProps<T> = {
  isOpen: boolean;
  optionsPosition?: DOMRect;
  setIsOpen: (state: boolean) => void;
  placeholder: string;
  onSearchQuery?: (value: string) => void;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  value: '' | T | Array<T>;
  showSelectedOptionsOnTop?: boolean;
  compareValueOrValuesAreEqual: (a: T, b: T | Array<T>) => boolean;
  renderValue: (value: T | Array<T>) => React.ReactNode;
  renderSingleValue: (value: T) => React.ReactNode;
  multiselect?: boolean;
  loadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  setValue: (value: T | Array<T> | '') => void;
  name: string;
  options: Array<T>;
  selectOption: (option: T) => void;
  unselectOption: (option: T) => void;
};
export const Options = <T,>({
  setIsOpen,
  placeholder,
  onSearchQuery,
  searchQueryValue,
  value,
  compareValueOrValuesAreEqual,
  renderValue,
  renderSingleValue,
  setValue,
  name,
  searchQueryPlaceholder = 'Search option',
  showSelectedOptionsOnTop = false,
  multiselect = false,
  selectOption,
  unselectOption,
  isOpen,
  optionsPosition,
  options,
  loadMore = () => null,
  isLoading = false,
  hasNextPage = false,
}: OptionsProps<T>) => {
  const renderInternalOption = useCallback(
    (option: T, key: number) => (
      <SelectOption
        key={key}
        id={`${key}`}
        selected={!!value && value !== '' && compareValueOrValuesAreEqual(option, value)}
        data={option}
        renderOption={renderSingleValue}
        multiselect={multiselect}
        unselectOption={unselectOption}
        selectOption={selectOption}
      />
    ),
    [value, compareValueOrValuesAreEqual, renderSingleValue, multiselect, unselectOption, selectOption],
  );

  return (
    <OptionsStyle
      className={`${isOpen ? 'show' : ''} ${!!optionsPosition}`}
      style={
        optionsPosition
          ? {
              width: optionsPosition.width,
              top: optionsPosition.top,
              left: optionsPosition.left,
            }
          : {}
      }
    >
      <OptionsHeader
        setIsOpen={setIsOpen}
        placeholder={placeholder}
        onSearchQuery={onSearchQuery}
        searchQueryValue={searchQueryValue}
        value={value}
        renderValue={renderValue}
        setValue={setValue}
        name={name}
        searchQueryPlaceholder={searchQueryPlaceholder}
        showSelectedOptionsOnTop={showSelectedOptionsOnTop}
        options={options}
        isOpen={isOpen}
        renderOption={renderInternalOption}
      />
      <section className='options-list-container'>
        {options.length === 0 ? (
          <ul className='options-list' role='listbox' tabIndex={-1}>
            <li className='option option-empty' tabIndex={-1}>
              No options to select
            </li>
          </ul>
        ) : (
          <ul className='options-list' role='listbox' tabIndex={-1}>
            <InfinityScroll
              isLoading={isLoading}
              hasNextPage={hasNextPage}
              loadMore={loadMore}
              data={options}
              renderItem={renderInternalOption}
            />
          </ul>
        )}
      </section>
    </OptionsStyle>
  );
};
