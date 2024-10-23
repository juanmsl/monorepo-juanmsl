import { useMemo } from 'react';

import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { SwitchContainerStyle, SwitchStyle } from './switch.style';

import { useClassNames, useInputHandlers } from '@juanmsl/hooks';

type SwitchProps = {
  label?: string;
  width?: number;
  dotSize?: number;
  dotHoverSize?: number;
  padding?: number;
  leftIcon?: IconNameT;
  rightIcon?: IconNameT;
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
  width = 3,
  dotSize = 1.2,
  dotHoverSize = 1.2,
  padding = 0.25,
  leftIcon,
  rightIcon,
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
  const swicthClassName = useClassNames({
    'is-checked': value,
    'is-readonly': !disabled && readOnly,
  });

  const _width = Math.max(width, 3) * dotSize;
  const _dotHoverSize = Math.min(Math.max(dotHoverSize, 1), 2) * dotSize;
  const _padding = Math.min(padding, (_width - 0.5 - dotSize * 2) / 2);

  return (
    <SwitchContainerStyle
      $width={_width}
      $padding={_padding}
      $dotHoverSize={_dotHoverSize}
      className={className}
      style={style}
    >
      <SwitchStyle $width={_width} $padding={_padding} $dotSize={dotSize} className={swicthClassName}>
        {leftIcon !== undefined && (
          <span className='switch-left-icon'>
            <Icon name={leftIcon} size={`${dotSize * 0.7}em`} />
          </span>
        )}
        {rightIcon !== undefined && (
          <span className='switch-right-icon'>
            <Icon name={rightIcon} size={`${dotSize * 0.7}em`} />
          </span>
        )}
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
          disabled={disabled || readOnly}
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
