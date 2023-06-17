import { withController } from '../with-controller';
import { InputProps, RangeProps } from '../types';
import { Field } from '../field';
import { useId } from 'react';
import { useInputHandlers } from '@juanmsl/hooks';

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
  state,
}: InputProps<RangeProps, number>) => {
  const id = useId();
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: (value) => setValue(+value),
  });

  return (
    <Field
      id={id}
      label={label}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      error={state?.error?.message}
      isFocus={isFocus}
    >
      <input id={id} type="range" name={name} className={className} style={style} value={value} {...handlers} />
    </Field>
  );
};

export const RangeController = withController<RangeProps, number>(InputRange, 0);
