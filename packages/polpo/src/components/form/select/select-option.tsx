import React, { useCallback } from 'react';

import { Icon } from '../../icon';
import { Checkbox } from '../checkbox';

import { OptionStyle } from './select.style';
import { SelectItem, SelectOptionProps, SelectOptionVariant } from './select.types';

import { useClassNames } from '@polpo/hooks';

export const SelectOption = <T extends SelectItem>({
  id,
  selected,
  selectOption,
  unselectOption,
  data,
  Component,
  multiselect,
  variant,
}: SelectOptionProps<T>) => {
  const optionClassName = useClassNames({
    'selected-option': selected,
    'multiselect-icon': multiselect && variant === SelectOptionVariant.ICON,
    'multiselect-checkbox': multiselect && variant === SelectOptionVariant.CHECKBOX,
  });

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
    <OptionStyle
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={-1}
      onKeyDown={handleKeyDown(data)}
      className={optionClassName}
      onClick={handleClick(data)}
    >
      {multiselect && variant === SelectOptionVariant.CHECKBOX && (
        <Checkbox name={id} value={selected} setValue={handleCheckboxChange(data)} />
      )}
      <section className='option-content'>
        <Component data={data} isSelected={selected} multiselect={multiselect} />
      </section>
      {multiselect && selected && variant === SelectOptionVariant.ICON && <Icon name='checkmark' />}
      {multiselect && !selected && variant === SelectOptionVariant.ICON && <span />}
    </OptionStyle>
  );
};
