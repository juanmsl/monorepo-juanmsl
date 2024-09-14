import { useInputHandlers } from '@juanmsl/hooks';
import { useMemo } from 'react';

import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { SwitchContainerStyle, SwitchStyle } from './switch.style';

type SwitchProps = {
  label?: string;
};

export const Switch = ({
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
}: UnControlledComponentProps<SwitchProps, boolean>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers<HTMLInputElement>({
    onChange: e => setValue(e.target.checked),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  return (
    <SwitchContainerStyle className={className} style={style}>
      <SwitchStyle className={value ? 'is-checked' : ''}>
        <span className='switch-dot' />
        <input
          id={id}
          type='checkbox'
          name={name}
          className={`switch-checkbox ${className}`}
          style={style}
          checked={value}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          {...handlers}
        />
      </SwitchStyle>
      {label ? (
        <Typography variant='label-form' className='switch-label' htmlFor={id}>
          {label}
        </Typography>
      ) : null}
    </SwitchContainerStyle>
  );
};

const SwitchController = ({ rules, ...props }: ControllerGeneratorProps<SwitchProps, boolean>) => {
  return <Controller Component={Switch} defaultValue={false} inputProps={props} rules={rules} />;
};

Switch.Controller = SwitchController;
