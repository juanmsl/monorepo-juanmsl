import { Field } from '../field';
import { InputProps } from '../types';
import { useId } from 'react';
import { useInputHandlers } from '../../../hooks';
import { withController } from '../with-controller';

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
}: InputProps<RangeProps, number>) => {
  const id = useId();
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: value => setValue(+value),
  });

  return (
    <Field id={id} label={label} leftIcon={leftIcon} rightIcon={rightIcon} error={error?.message} isFocus={isFocus}>
      <input id={id} type='range' name={name} className={className} style={style} value={value} {...handlers} />
    </Field>
  );
};

export const RangeController = withController<RangeProps, number>(InputRange, 0);
