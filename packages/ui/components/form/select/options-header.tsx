import { Icon } from '../../../contexts';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { OptionsHeaderStyle } from './select.style';

type OptionsHeaderProps<T> = {
  name: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  placeholder: string;
  onSearchQuery?: (value: string) => void;
  searchQueryValue?: string;
  searchQueryPlaceholder?: string;
  value: '' | T | Array<T>;
  showSelectedOptionsOnTop?: boolean;
  renderValue: (value: T | Array<T>) => React.ReactNode;
  setValue: (value: T | Array<T> | '') => void;
  options: Array<T>;
  renderOption: (option: T, key: number) => React.ReactNode;
};
export const OptionsHeader = <T,>({
  isOpen,
  setIsOpen,
  placeholder,
  onSearchQuery,
  searchQueryValue,
  value,
  setValue,
  renderValue,
  renderOption,
  searchQueryPlaceholder = 'Search option',
  showSelectedOptionsOnTop = false,
}: OptionsHeaderProps<T>) => {
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
      searchInputRef.current && searchInputRef.current.focus();
    }
  }, [isOpen]);

  const selectedValuesRendered = useMemo(() => {
    if (value === '' || !showSelectedOptionsOnTop) return [];
    const valuesToRender = Array.isArray(value) ? value : [value];
    return valuesToRender.map(renderOption);
  }, [renderOption, showSelectedOptionsOnTop, value]);

  return (
    <OptionsHeaderStyle>
      <span className="option-placeholder" onClick={() => setIsOpen(false)}>
        {placeholder}
      </span>
      {onSearchQuery && (
        <input
          name="query"
          className="input-search"
          value={searchQueryValue ?? internalSearchQuery}
          onChange={handleSearchQuery}
          placeholder={searchQueryPlaceholder}
          onClick={(e) => e.stopPropagation()}
          ref={searchInputRef}
          autoFocus
        />
      )}
      {selectedValuesRendered.length > 0 ? (
        <ul className="options-list options-selected" role="listbox" tabIndex={-1}>
          {selectedValuesRendered}
        </ul>
      ) : !!value && value !== '' ? (
        <ul className="options-list options-selected" role="listbox" tabIndex={-1}>
          <li className="option option-selected-resume" tabIndex={-1}>
            <span className="text-content">{!!value && value !== '' && renderValue(value)}</span>
            <section className="icon-close" onClick={() => setValue('')}>
              <Icon name="cross" />
            </section>
          </li>
        </ul>
      ) : null}
    </OptionsHeaderStyle>
  );
};
