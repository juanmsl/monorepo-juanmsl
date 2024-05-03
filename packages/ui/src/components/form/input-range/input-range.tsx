import { useMemo } from 'react';

import { useInputHandlers } from '../../../hooks';
import { Field } from '../field';
import { InputProps } from '../types';
import { withController } from '../with-controller';

import { InputRangeStyle } from './input-range.style';

type RangeProps = {
  min?: number;
  max?: number;
  step?: number;
};

export const InputRange = ({
  name,
  className = '',
  style = {},
  setValue,
  onBlur,
  value,
  label,
  leftIcon,
  rightIcon,
  error,
  min,
  max,
  step,
}: InputProps<RangeProps, number>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const onBlurInput = () => {
    onBlur && onBlur();
    const parsedValue = parseInt(`${value}`);

    if (min !== undefined && parsedValue < min) {
      setValue(min);
    }

    if (max !== undefined && parsedValue > max) {
      setValue(max);
    }

    setValue(parsedValue);
  };

  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlurInput,
    onChange: value => setValue(+value),
  });

  return (
    <Field
      noBorderBottom
      id={id}
      label={label}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      error={error?.message}
      isFocus={isFocus}
    >
      <InputRangeStyle $isFocus={isFocus}>
        <input
          id={id}
          type='range'
          name={name}
          className={`input-range ${className}`}
          style={style}
          value={value}
          min={min}
          max={max}
          step={step}
          {...handlers}
        />
        <input
          id={id}
          type='number'
          name={name}
          className={`input-range-number ${className}`}
          style={style}
          value={value}
          min={min}
          max={max}
          step={step}
          {...handlers}
        />
      </InputRangeStyle>
    </Field>
  );
};

export const RangeController = withController<RangeProps, number>(InputRange, 0);
