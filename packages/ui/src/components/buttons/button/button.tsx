import { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './button.style';
import { useClassNames } from '../../../hooks';
import { ButtonSize, ButtonVariant } from './button.constants';
import { Icon, IconNameT } from '../../../contexts';

export type ButtonProps = {
  children: string;
  disabled?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
  size?: `${ButtonSize}`;
  variant?: `${ButtonVariant}`;
  leftIcon?: IconNameT;
  rightIcon?: IconNameT;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
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
}: ButtonProps) => {
  const className = useClassNames({
    rounded: rounded,
    small: size === ButtonSize.SMALL,
    large: size === ButtonSize.LARGE,
    ghost: variant === ButtonVariant.GHOST,
    flat: variant === ButtonVariant.FLAT,
    'is-loading': isLoading,
  });

  return (
    <ButtonStyle className={className} disabled={disabled} onClick={onClick}>
      {leftIcon && !isLoading && <Icon className='button-left-icon' name={leftIcon} />}
      <span>{isLoading ? <Icon name='spinner' /> : children}</span>
      {rightIcon && !isLoading && <Icon className='button-right-icon' name={rightIcon} />}
    </ButtonStyle>
  );
};
