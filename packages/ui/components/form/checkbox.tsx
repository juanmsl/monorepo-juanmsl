import { CheckBoxRadioSC } from './checkbox-radio.style';
import { withController } from './with-controller';
import { CheckboxProps, InputProps } from './types';
import React, { useCallback, useId } from 'react';

export const Checkbox = ({
  name,
  value,
  onBlur,
  className = '',
  style = {},
  label,
  setValue,
}: InputProps<CheckboxProps, boolean>) => {
  const id = useId();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setValue(checked);
    },
    [setValue],
  );

  return (
    <CheckBoxRadioSC>
      <input
        id={id}
        onChange={handleChange}
        type="checkbox"
        name={name}
        className={className}
        style={style}
        checked={value as boolean}
        onBlur={onBlur}
      />
      {label !== undefined && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
    </CheckBoxRadioSC>
  );
};

export const CheckboxController = withController<CheckboxProps, boolean>(Checkbox, false);
