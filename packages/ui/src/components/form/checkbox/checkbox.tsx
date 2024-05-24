import { HTMLAttributes, useCallback, useMemo } from 'react';

import { InputProps } from '../types';
import { withController } from '../with-controller';

import { CheckBoxSC } from './checkbox.style';

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {};

export const Checkbox = ({
  name,
  value,
  onBlur,
  className = '',
  style = {},
  label,
  setValue,
  ...props
}: InputProps<CheckboxProps, boolean>) => {
  const id = useMemo(() => crypto.randomUUID(), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setValue(checked);
    },
    [setValue],
  );

  return (
    <CheckBoxSC>
      <input
        id={id}
        onChange={handleChange}
        type='checkbox'
        name={name}
        className={className}
        style={style}
        checked={value as boolean}
        onBlur={onBlur}
        {...props}
      />
      {label !== undefined && (
        <label htmlFor={id} className='label'>
          {label}
        </label>
      )}
    </CheckBoxSC>
  );
};

export const CheckboxController = withController<CheckboxProps, boolean>(Checkbox, false);
