import { CheckBoxRadioSC } from './checkbox-radio.style';
import { withController } from './with-controller';
import { RadioProps, InputProps } from './types';
import React, { useCallback, useId } from 'react';

export const Radio = ({
  name,
  value,
  radioValue,
  setValue,
  onBlur,
  className = '',
  style = {},
  label,
}: InputProps<RadioProps, string>) => {
  const id = useId();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    },
    [setValue],
  );

  return (
    <CheckBoxRadioSC>
      <input
        id={id}
        onChange={handleChange}
        type="radio"
        name={name}
        className={className}
        style={style}
        value={radioValue}
        checked={value === radioValue}
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

export const RadioController = withController<RadioProps, string>(Radio, '');
