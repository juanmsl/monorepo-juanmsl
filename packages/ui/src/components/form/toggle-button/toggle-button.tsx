import { useInputHandlers } from '@juanmsl/hooks';
import { useMemo } from 'react';

import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { ToggleButtonContainerStyle, ToggleButtonStyle } from './toggle-button.style';

type ToggleButtonProps = {
  label?: string;
};

export const ToggleButton = ({
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
  label,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<ToggleButtonProps, boolean>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers<HTMLInputElement>({
    onChange: e => setValue(e.target.checked),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  return (
    <ToggleButtonContainerStyle className={className} style={style}>
      <ToggleButtonStyle className={value ? 'is-checked' : ''}>
        <span className='toggle-button-dot' />
        <input
          id={id}
          type='checkbox'
          name={name}
          className={`toggle-button-checkbox ${className}`}
          style={style}
          checked={value}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          {...handlers}
        />
      </ToggleButtonStyle>
      {label ? (
        <Typography variant='label-form' htmlFor={id}>
          {label}
        </Typography>
      ) : null}
    </ToggleButtonContainerStyle>
  );
};

const ToggleButtonController = ({ rules, ...props }: ControllerGeneratorProps<ToggleButtonProps, boolean>) => {
  return <Controller Component={ToggleButton} defaultValue={false} inputProps={props} rules={rules} />;
};

ToggleButton.Controller = ToggleButtonController;
