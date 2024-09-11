import { useInputHandlers } from '@juanmsl/hooks';
import { useMemo } from 'react';

import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { RadioContainerStyle, RadioStyle } from './radio.style';

type RadioProps = {
  label?: string;
  radioValue: string;
};

export const Radio = ({
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
  radioValue,
  label,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<RadioProps, string>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers({
    onChange: e => setValue(e.target.value),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  return (
    <RadioContainerStyle className={className} style={style}>
      <RadioStyle className={radioValue === value ? 'is-checked' : ''}>
        <span className='radio-dot' />
        <input
          id={id}
          type='radio'
          name={name}
          className={`radio-input ${className}`}
          style={style}
          value={radioValue}
          checked={radioValue === value}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          {...handlers}
        />
      </RadioStyle>
      {label ? (
        <Typography variant='label-form' htmlFor={id} className='radio-label'>
          {label}
        </Typography>
      ) : null}
    </RadioContainerStyle>
  );
};

const RadioController = ({ rules, ...props }: ControllerGeneratorProps<RadioProps, string>) => {
  return <Controller Component={Radio} defaultValue='' inputProps={props} rules={rules} />;
};

Radio.Controller = RadioController;
