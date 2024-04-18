import { useInputHandlers } from '../../../hooks';
import { Typography } from '../../typography';
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
  const id = crypto.randomUUID();
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
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
        {min !== undefined ? (
          <Typography className='min-range-limit' variant='small'>
            {min}
          </Typography>
        ) : null}
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
        {max !== undefined ? (
          <Typography className='max-range-limit' variant='small'>
            {max}
          </Typography>
        ) : null}
      </InputRangeStyle>
    </Field>
  );
};

export const RangeController = withController<RangeProps, number>(InputRange, 0);
