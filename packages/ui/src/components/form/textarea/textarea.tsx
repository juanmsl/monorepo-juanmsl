import { InputProps } from '../types';
import { Label } from '../label';
import { TextareaSC } from './textarea.style';
import { useInputHandlers } from '../../../hooks';
import { withController } from '../with-controller';
import React, { useId } from 'react';

type TextareaProps = {
  rows?: number;
  resize?: React.CSSProperties['resize'];
};

export const Textarea = ({
  name,
  className = '',
  style = {},
  setValue,
  onBlur,
  value,
  rows = 4,
  resize = 'none',
  autoComplete = 'off',
  autoFocus = false,
  placeholder,
  label,
}: InputProps<TextareaProps, string>) => {
  const id = useId();
  const { isFocus, handlers } = useInputHandlers({
    onBlur: onBlur,
    onChange: (value) => setValue(value),
  });

  return (
    <section>
      {!!label && <Label id={id} label={label} isFocus={isFocus} />}
      <TextareaSC
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
    </section>
  );
};

export const TextareaController = withController<TextareaProps, string>(Textarea, '');
