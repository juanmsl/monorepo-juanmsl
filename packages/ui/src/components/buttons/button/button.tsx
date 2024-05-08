import React, { ButtonHTMLAttributes } from 'react';

import { Icon, IconNameT } from '../../../contexts';
import { useClassNames } from '../../../hooks';

import { ButtonSize, ButtonVariant } from './button.constants';
import { ButtonStyle } from './button.style';

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
};

export const Button = ({
  children,
  disabled = false,
  rounded = false,
  isLoading = false,
  size = ButtonSize.REGULAR,
  variant = ButtonVariant.DEFAULT,
  leftIcon,
  rightIcon,
  onClick,
  width = 'fit',
  className = '',
  style = {},
}: ButtonProps) => {
  const buttonClassName = useClassNames({
    rounded: rounded,
    small: size === ButtonSize.SMALL,
    large: size === ButtonSize.LARGE,
    ghost: variant === ButtonVariant.GHOST,
    flat: variant === ButtonVariant.FLAT,
    [width]: !!width,
    'is-loading': isLoading,
    [className]: !!className,
  });

  return (
    <ButtonStyle className={buttonClassName} style={style} disabled={disabled} onClick={onClick}>
      {leftIcon && !isLoading && <Icon className='button-left-icon' name={leftIcon} />}
      <span className='button-text'>{isLoading ? <Icon name='spinner' /> : children}</span>
      {rightIcon && !isLoading && <Icon className='button-right-icon' name={rightIcon} />}
    </ButtonStyle>
  );
};
