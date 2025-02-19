import { useMemo } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

import { ColorVariants } from '../../../core/variants';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { RadioContainerStyle, RadioFillStyle, RadioStyle } from './radio.style';

import { useInputHandlers } from '@polpo/hooks';

const getRadioColor = (theme: DefaultTheme, color: `${ColorVariants}`): string => {
  const radioColors: Record<ColorVariants, string> = {
    [ColorVariants.Primary]: theme.colors.primary.main,
    [ColorVariants.Secondary]: theme.colors.secondary.main,
    [ColorVariants.Tertiary]: theme.colors.tertiary.main,
    [ColorVariants.Info]: theme.colors.info.main,
    [ColorVariants.Active]: theme.colors.active.main,
    [ColorVariants.Warning]: theme.colors.warning.main,
    [ColorVariants.Alert]: theme.colors.alert.main,
  };

  return radioColors[color] ?? radioColors[ColorVariants.Primary];
};

type RadioProps = {
  label?: string;
  radioValue: string;
  placeholder?: never;
  color?: `${ColorVariants}`;
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
  autoComplete = 'off',
  radioValue,
  label,
  color = ColorVariants.Primary,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<RadioProps, string>) => {
  const theme = useTheme();
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers({
    onChange: e => setValue(e.target.value),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  return (
    <RadioContainerStyle $color={getRadioColor(theme, color)} className={className} style={style}>
      <RadioStyle className={radioValue === value ? 'is-checked' : ''}>
        <RadioFillStyle />
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
          disabled={disabled || readOnly}
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
