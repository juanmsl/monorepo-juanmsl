import React, { useCallback } from 'react';

import { Checkbox } from '../../form';

import { SelectOptionProps } from './select.types';

export const SelectOption = <T,>({
  id,
  selected,
  selectOption,
  unselectOption,
  data,
  Component,
  multiselect,
}: SelectOptionProps<T>) => {
  const handleKeyDown = useCallback(
    (option: T) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (['Enter', ' '].includes(e.key)) {
        e.preventDefault();

        if (selected && multiselect) {
          unselectOption(option);
        } else {
          selectOption(option);
        }
      }
    },
    [multiselect, selectOption, selected, unselectOption],
  );

  const handleCheckboxChange = useCallback(
    (option: T) => (checked: boolean | '') => {
      if (checked !== '' && checked) selectOption(option);
      else unselectOption(option);
    },
    [selectOption, unselectOption],
  );

  const handleClick = useCallback(
    (option: T) => (e: React.MouseEvent) => {
      e.stopPropagation();

      if (multiselect) {
        if (selected) unselectOption(option);
        else selectOption(option);
      } else {
        selectOption(option);
      }
    },
    [multiselect, selected, selectOption, unselectOption],
  );

  return (
    <li
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(data)}
      className={`option ${selected ? 'selected' : ''} ${multiselect ? 'multiselect' : ''}`}
      onClick={handleClick(data)}
    >
      {multiselect && <Checkbox name={id} tabIndex={-1} value={selected} setValue={handleCheckboxChange(data)} />}
      <section className='content'>
        <Component data={data} isSelected={selected} multiselect={multiselect} />
      </section>
    </li>
  );
};
