import { useInputHandlers } from '@juanmsl/hooks';
import React, { useMemo } from 'react';

import { Controller } from '../controller';
import { Field, InputFieldProps } from '../field';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { TextareaStyle } from './textarea.style';

type TextareaProps = InputFieldProps<{
  rows?: number;
  resize?: React.CSSProperties['resize'];
  leftIcon?: never;
  rightIcon?: never;
}>;

export const Textarea = ({
  name,
  value,
  setValue,
  onBlur,
  onFocus,
  rows = 4,
  resize = 'vertical',
  className = '',
  style = {},
  autoFocus = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readOnly = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}: UnControlledComponentProps<TextareaProps, string>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers, isFocus } = useInputHandlers({
    onBlur: onBlur,
    onChange: v => setValue(v as string),
    onFocus: onFocus,
  });

  return (
    <Field id={id} error={error} isFocus={isFocus} {...fieldProps}>
      <TextareaStyle
        id={id}
        name={name}
        className={className}
        style={{
          resize: resize,
          ...style,
        }}
        value={value}
        rows={rows}
        {...handlers}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </Field>
  );
};

const TextareaController = ({ rules, ...props }: ControllerGeneratorProps<TextareaProps, string>) => {
  return <Controller Component={Textarea} defaultValue='' inputProps={props} rules={rules} />;
};

Textarea.Controller = TextareaController;
