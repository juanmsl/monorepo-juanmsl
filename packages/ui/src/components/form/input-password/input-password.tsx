import { Field } from '../field';
import { IconNameT } from '../../../contexts';
import { InputProps } from '../types';
import { withController } from '../with-controller';
import { useId, useMemo } from 'react';
import { useInputHandlers, useToggleValues } from '../../../hooks';

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
    if (type === 'password') return 'eye-open' as IconNameT;

    if (type === 'text') return 'eye-hidden' as IconNameT;

    return 'warning' as IconNameT;
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
