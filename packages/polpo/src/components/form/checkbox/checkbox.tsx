import { useMemo } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

import { ColorVariants } from '../../../core/variants';
import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { CheckboxContainerStyle, CheckboxFillStyle, CheckboxStyle } from './checkbox.style';

import { useInputHandlers } from '@polpo/hooks';

type CheckboxColor = {
  color: string;
  colorIcon: string;
};

const getCheckboxColor = (theme: DefaultTheme, color: `${ColorVariants}`): CheckboxColor => {
  const checkboxColors: Record<ColorVariants, CheckboxColor> = {
    [ColorVariants.Primary]: { color: theme.colors.primary.main, colorIcon: theme.colors.primary.contrast },
    [ColorVariants.Secondary]: { color: theme.colors.secondary.main, colorIcon: theme.colors.secondary.contrast },
    [ColorVariants.Tertiary]: { color: theme.colors.tertiary.main, colorIcon: theme.colors.tertiary.contrast },
    [ColorVariants.Info]: { color: theme.colors.info.main, colorIcon: theme.colors.info.contrast },
    [ColorVariants.Active]: { color: theme.colors.active.main, colorIcon: theme.colors.active.contrast },
    [ColorVariants.Warning]: { color: theme.colors.warning.main, colorIcon: theme.colors.warning.contrast },
    [ColorVariants.Alert]: { color: theme.colors.alert.main, colorIcon: theme.colors.alert.contrast },
  };

  return checkboxColors[color] ?? checkboxColors[ColorVariants.Primary];
};

type CheckboxProps = {
  label?: React.ReactNode;
  placeholder?: never;
  icon?: IconNameT;
  color?: `${ColorVariants}`;
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
  color = ColorVariants.Primary,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<CheckboxProps, boolean>) => {
  const theme = useTheme();
  const id = useMemo(() => crypto.randomUUID(), []);
  const { handlers } = useInputHandlers<HTMLInputElement>({
    onChange: e => setValue(e.target.checked),
    onBlur: onBlur,
    onFocus: onFocus,
  });

  const checkboxColor = getCheckboxColor(theme, color);

  return (
    <CheckboxContainerStyle
      $color={checkboxColor.color}
      $colorIcon={checkboxColor.colorIcon}
      className={className}
      style={style}
      onClick={e => e.stopPropagation()}
    >
      <CheckboxStyle className={value ? 'is-checked' : ''}>
        <CheckboxFillStyle>
          <Icon name={icon} className='checkbox-icon' />
        </CheckboxFillStyle>
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
