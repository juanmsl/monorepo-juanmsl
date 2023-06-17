import { withController } from '../with-controller';
import { InputProps, InputTextProps } from '../types';
import { Field } from '../field';
import { useId } from 'react';
import { useInputHandlers } from '@juanmsl/hooks';

export const Input = ({
  name,
  type = 'text',
  className = '',
  style = {},
  setValue,
  onBlur,
  value,
  leftIcon,
  rightIcon,
  autoFocus = false,
  autoComplete = 'off',
  placeholder,
  label,
  state,
  disabled,
}: InputProps<InputTextProps, string>) => {
  const id = useId();
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: setValue,
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
      <input
        id={id}
        disabled={disabled}
        {...handlers}
        type={type}
        name={name}
        className={className}
        style={style}
        value={value}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </Field>
  );
};

export const InputController = withController<InputTextProps, string>(Input, '');
