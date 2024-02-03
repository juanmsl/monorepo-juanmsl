import { Icon } from '../../../contexts';
import { Checkbox } from '../checkbox';
import { useCallback } from 'react';

type SelectOptionProps<T> = {
  id: string;
  selected: boolean;
  selectOption: (value: T) => void;
  unselectOption: (value: T) => void;
  data: T;
  renderOption: (option: T) => React.ReactNode;
  multiselect: boolean;
};
export const SelectOption = <T,>({
  id,
  selected,
  selectOption,
  unselectOption,
  data,
  renderOption,
  multiselect,
}: SelectOptionProps<T>) => {
  const handleKeyDown = useCallback(
    (option: T) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (['Enter'].includes(e.key)) {
        e.preventDefault();
        selectOption(option);
      }
    },
    [selectOption],
  );

  const handleCheckboxChange = useCallback(
    (option: T) => (checked: boolean | '') => {
      if (checked !== '' && checked) selectOption(option);
      else unselectOption(option);
    },
    [selectOption, unselectOption],
  );

  const handleClick = useCallback(
    (option: T) => () => {
      if (multiselect) {
        if (selected) unselectOption(option);
        else selectOption(option);
      } else {
        selectOption(option);
      }
    },
    [multiselect, selected, selectOption, unselectOption],
  );

  const clearOption = useCallback(
    (option: T) => (e: React.MouseEvent) => {
      e.stopPropagation();
      unselectOption(option);
    },
    [unselectOption],
  );

  return (
    <li
      id={id}
      role="option"
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(data)}
      className={`option ${selected ? 'selected' : ''} ${multiselect ? 'multiselect' : ''}`}
      onClick={handleClick(data)}
    >
      {multiselect && <Checkbox name={id} value={selected} setValue={handleCheckboxChange(data)} />}
      <section className="content">{renderOption(data)}</section>
      {selected && !multiselect && (
        <section className="icon-close" onClick={clearOption(data)}>
          <Icon name="cross" />
        </section>
      )}
    </li>
  );
};
