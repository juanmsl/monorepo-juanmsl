import { IconNameT } from '../../../contexts';
import { withController } from '../with-controller';
import { InputProps } from '../types';
import { Field } from '../field';
import { useId, useMemo } from 'react';
import { useInputHandlers, useToggleValues } from '@juanmsl/hooks';

type InputPasswordProps = {};

export const InputPassword = ({
  name,
  className = '',
  style = {},
  setValue,
  onBlur,
  value,
  label,
  leftIcon,
  autoComplete = 'off',
  autoFocus = false,
  placeholder,
  error,
  disabled,
}: InputProps<InputPasswordProps, string>) => {
  const id = useId();
  const [type, toggle] = useToggleValues<'password' | 'text'>(['password', 'text']);
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: setValue,
  });

  const iconName = useMemo<IconNameT>(() => {
    if (type === 'password') return 'eye-close';
    if (type === 'text') return 'eye-open';
    return 'not-found';
  }, [type]);

  return (
    <Field
      id={id}
      label={label}
      leftIcon={leftIcon}
      onClickRightIcon={toggle}
      rightIcon={iconName}
      error={error?.message}
      isFocus={isFocus}
    >
      <input
        id={id}
        disabled={disabled}
        type={type}
        name={name}
        className={className}
        style={style}
        value={value}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...handlers}
      />
    </Field>
  );
};

export const InputPasswordController = withController<InputPasswordProps, string>(InputPassword, '');
