import { useInputHandlers, useToggleValues } from '@juanmsl/hooks';
import { useMemo } from 'react';

import { Controller, InputFieldProps } from '..';
import { IconNameT } from '../../icon';
import { Field } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

type InputPasswordProps = InputFieldProps<{
  rightIcon?: never;
}>;

export const InputPassword = ({
  name,
  value,
  setValue,
  onBlur,
  onFocus,
  className = '',
  style = {},
  autoFocus = false,
  readOnly = false,
  disabled = false,
  placeholder = '',
  autoComplete = 'off',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDirty = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isTouched = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  invalid = false,
  error,
  ...fieldProps
}: UnControlledComponentProps<InputPasswordProps, string>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const [type, toggle] = useToggleValues<'password' | 'text'>(['password', 'text']);
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: setValue,
    onFocus: onFocus,
  });

  const iconName = useMemo<IconNameT>(() => {
    if (type === 'password') return 'eye' as IconNameT;

    if (type === 'text') return 'eye-hidden' as IconNameT;

    return 'warning' as IconNameT;
  }, [type]);

  return (
    <Field
      id={id}
      error={error}
      isFocus={isFocus}
      {...fieldProps}
      rightIcon={iconName}
      onClickRightIcon={() => toggle()}
    >
      <input
        id={id}
        type={type}
        name={name}
        className={className}
        style={style}
        value={value}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...handlers}
      />
    </Field>
  );
};

const InputPasswordController = ({ rules, ...props }: ControllerGeneratorProps<InputPasswordProps, string>) => {
  return <Controller Component={InputPassword} defaultValue='' inputProps={props} rules={rules} />;
};

InputPassword.Controller = InputPasswordController;
