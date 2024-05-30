import { useCallback, useMemo } from 'react';

import { InputProps } from '../types';
import { withController } from '../with-controller';

import { RadioSC } from './radio.style';

type RadioProps = {
  radioValue: string;
};

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
  const id = useMemo(() => crypto.randomUUID(), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    },
    [setValue],
  );

  return (
    <RadioSC>
      <input
        id={id}
        onChange={handleChange}
        type='radio'
        name={name}
        className={className}
        style={style}
        value={radioValue}
        checked={value === radioValue}
        onBlur={onBlur}
      />
      {label !== undefined && (
        <label htmlFor={id} className='label'>
          {label}
        </label>
      )}
    </RadioSC>
  );
};

export const RadioController = withController<RadioProps, string>(Radio, '');
