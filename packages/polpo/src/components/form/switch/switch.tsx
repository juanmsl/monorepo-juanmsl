import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { ThemeColor } from '../../../contexts';
import { ColorVariants, SizeVariants } from '../../../core/variants';
import { Icon, IconNameT } from '../../icon';
import { Tooltip } from '../../tooltips';
import { Typography } from '../../typography';
import { Controller } from '../controller';
import { ControllerGeneratorProps, UnControlledComponentProps } from '../form.types';

import { SwitchColorStyles, SwitchContainerStyle, SwitchStyle } from './switch.style';

import { useClassNames, useInputHandlers } from '@polpo/hooks';

const getSwitchColor = (color: ThemeColor): SwitchColorStyles | null => {
  if (color) {
    return {
      $color: color.main,
      $colorDark: color.dark,
      $colorContrast: color.contrast,
    };
  }

  return null;
};

const DotSizeMap = {
  [SizeVariants.Small]: 1,
  [SizeVariants.Medium]: 1.2,
  [SizeVariants.Large]: 1.4,
};

const WidthMap = {
  [SizeVariants.Small]: 2,
  [SizeVariants.Medium]: 2.5,
  [SizeVariants.Large]: 3,
};

type SwitchProps = {
  leftLabel?: string;
  rightLabel?: string;
  label?: string;
  dotHoverSize?: number;
  padding?: number;
  leftIcon?: IconNameT;
  rightIcon?: IconNameT;
  internalLeftIcon?: IconNameT;
  internalRightIcon?: IconNameT;
  leftIconTooltip?: string;
  rightIconTooltip?: string;
  color?: `${ColorVariants}`;
  size?: `${SizeVariants}`;
  width?: `${SizeVariants}`;
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
  leftLabel,
  rightLabel,
  width = SizeVariants.Medium,
  size = SizeVariants.Medium,
  dotHoverSize = 1.3,
  padding = 0.25,
  leftIcon,
  rightIcon,
  internalLeftIcon,
  internalRightIcon,
  leftIconTooltip,
  rightIconTooltip,
  color,
  /*
   * isDirty = false,
   * isTouched = false,
   * invalid = false,
   * error,
   */
}: UnControlledComponentProps<SwitchProps, boolean>) => {
  const id = useMemo(() => crypto.randomUUID(), []);
  const theme = useTheme();
  const { handlers } = useInputHandlers<HTMLInputElement>({
    onChange: e => setValue(e.target.checked),
    onBlur: onBlur,
    onFocus: onFocus,
  });
  const switchClassName = useClassNames({
    'is-checked': value,
    'is-readonly': !disabled && readOnly,
  });

  const dotSize = DotSizeMap[size] ?? DotSizeMap[SizeVariants.Medium];
  const _width = (WidthMap[width] ?? WidthMap[SizeVariants.Medium]) * dotSize;
  const _padding = Math.min(padding, dotSize);

  const switchColors: SwitchColorStyles = (color && getSwitchColor(theme.colors[color])) || {
    $color: theme.colors.text.main,
    $colorDark: theme.colors.text.dark,
    $colorContrast: theme.colors.background.main,
  };

  return (
    <SwitchContainerStyle
      $width={_width}
      $dotHoverSize={dotSize * Math.min(Math.max(dotHoverSize, 1), 2)}
      $dotSize={dotSize}
      className={className}
      style={style}
      $color={switchColors.$color}
      $colorContrast={switchColors.$colorContrast}
    >
      {leftLabel ? (
        <Typography variant='label-form' className='switch-label' htmlFor={id}>
          {leftLabel}
        </Typography>
      ) : null}
      {leftIcon !== undefined && (
        <Tooltip content={leftIconTooltip} disabled={!leftIconTooltip} offset={10}>
          <Icon name={leftIcon} size={`${dotSize * 0.7}em`} className='switch-icon' onClick={() => setValue(!value)} />
        </Tooltip>
      )}
      <SwitchStyle $width={_width} $padding={_padding} $dotSize={dotSize} {...switchColors} className={switchClassName}>
        {internalLeftIcon !== undefined && (
          <span className='switch-internal-left-icon'>
            <Icon name={internalLeftIcon} size={`${dotSize * 0.7}em`} />
          </span>
        )}
        {internalRightIcon !== undefined && (
          <span className='switch-internal-right-icon'>
            <Icon name={internalRightIcon} size={`${dotSize * 0.7}em`} />
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
      {rightIcon !== undefined && (
        <Tooltip content={rightIconTooltip} disabled={!rightIconTooltip} offset={10}>
          <Icon name={rightIcon} size={`${dotSize * 0.7}em`} className='switch-icon' onClick={() => setValue(!value)} />
        </Tooltip>
      )}
      {label || rightLabel ? (
        <Typography variant='label-form' className='switch-label' htmlFor={id}>
          {label || rightLabel}
        </Typography>
      ) : null}
    </SwitchContainerStyle>
  );
};

const SwitchController = ({ rules, ...props }: ControllerGeneratorProps<SwitchProps, boolean>) => {
  return <Controller Component={Switch} defaultValue={false} inputProps={props} rules={rules} />;
};

Switch.Controller = SwitchController;
