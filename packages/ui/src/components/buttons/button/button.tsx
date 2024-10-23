import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

import { ThemeColor } from '../../../contexts';
import { Icon, IconNameT } from '../../icon';
import { Ripple } from '../../ripple';

import { ButtonColor, ButtonSize, ButtonVariant } from './button.constants';
import { ButtonStyle, ButtonStyleProps } from './button.style';

import { useClassNames } from '@juanmsl/hooks';

const getColor = (color?: ThemeColor): ButtonStyleProps | null => {
  if (color) {
    return {
      $color: color.main,
      $colorDark: color.dark,
      $colorContrast: color.contrast,
    };
  }

  return null;
};

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
  size?: `${ButtonSize}`;
  variant?: `${ButtonVariant}`;
  leftIcon?: IconNameT;
  rightIcon?: IconNameT;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  width?: 'fit' | 'full';
  className?: string;
  style?: React.CSSProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  noShadow?: boolean;
  color?: `${ButtonColor}`;
};

const ButtonComponent = (
  {
    children,
    disabled = false,
    rounded = false,
    isLoading = false,
    size = 'regular',
    variant = 'solid',
    leftIcon,
    rightIcon,
    onClick,
    width = 'fit',
    className = '',
    style = {},
    noShadow = false,
    color,
    type = 'button',
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  const theme = useTheme();
  const buttonClassName = useClassNames({
    rounded: rounded,
    'small-size': size === ButtonSize.SMALL,
    'large-size': size === ButtonSize.LARGE,
    'ghost-variant': variant === ButtonVariant.GHOST,
    'flat-variant': variant === ButtonVariant.FLAT,
    'is-loading': !disabled && isLoading,
    'no-shadow': noShadow,
    [width]: !!width,
    [className]: !!className,
  });

  const buttonColors: ButtonStyleProps = (color && getColor(theme.colors[color])) || {
    $color: theme.colors.text.main,
    $colorDark: theme.colors.text.dark,
    $colorContrast: theme.colors.background.main,
  };

  return (
    <ButtonStyle
      ref={ref}
      {...buttonColors}
      className={buttonClassName}
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {leftIcon && (!isLoading || disabled) && <Icon className='button-left-icon' name={leftIcon} />}
      <span className='button-text'>
        {!disabled && isLoading ? <Icon name='spinner' className='button-loader-icon' /> : children}
      </span>
      {rightIcon && (!isLoading || disabled) && <Icon className='button-right-icon' name={rightIcon} />}
      <Ripple />
    </ButtonStyle>
  );
};

export const Button = React.forwardRef(ButtonComponent);
