import { useInputHandlers } from '@juanmsl/hooks';
import { useMemo } from 'react';

import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { CheckboxContainerStyle, CheckboxStyle } from './checkbox.style';

type CheckboxProps = {
  label?: string;
  placeholder?: never;
  icon?: IconNameT;
};

export const Checkbox = ({
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
  autoComplete = 'off',
  icon = 'checkmark',
  label,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<CheckboxProps, boolean>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers<HTMLInputElement>({
    onChange: e => setValue(e.target.checked),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  return (
    <CheckboxContainerStyle className={className} style={style}>
      <CheckboxStyle className={value ? 'is-checked' : ''}>
        <Icon name={icon} className='checkbox-icon' />
        <input
          id={id}
          type='checkbox'
          name={name}
          className={`checkbox-input ${className}`}
          style={style}
          checked={value}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          disabled={disabled || readOnly}
          {...handlers}
        />
      </CheckboxStyle>
      {label ? (
        <Typography variant='label-form' htmlFor={id} className='checkbox-label'>
          {label}
        </Typography>
      ) : null}
    </CheckboxContainerStyle>
  );
};

const CheckboxController = ({ rules, ...props }: ControllerGeneratorProps<CheckboxProps, boolean>) => {
  return <Controller Component={Checkbox} defaultValue={false} inputProps={props} rules={rules} />;
};

Checkbox.Controller = CheckboxController;
