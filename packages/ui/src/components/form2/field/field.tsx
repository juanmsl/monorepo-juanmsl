import { useClassNames } from '@juanmsl/hooks';
import React, { ForwardedRef } from 'react';

import { Icon, IconNameT } from '../../icon';
import { Typography } from '../../typography';

import { FieldStyle } from './field.style';
import { FieldProps, FieldVariant } from './field.types';

type GetIconParams = {
  iconName?: IconNameT;
  onClick: (e: React.MouseEvent) => void;
  className: string;
};

const getIcon = ({ iconName, className, onClick }: GetIconParams) =>
  iconName ? <Icon className={className} name={iconName} onClick={onClick} /> : <span />;

const FieldComponent = (
  {
    id,
    label,
    leftIcon,
    rightIcon,
    errorIcon = 'cross',
    error,
    onClickLeftIcon,
    onClickRightIcon,
    children,
    isFocus = false,
    variant,
  }: FieldProps,
  ref: ForwardedRef<HTMLElement>,
) => {
  const fieldClassName = useClassNames({
    focus: isFocus,
    error: !!error,
    'variant-content-border': variant === FieldVariant.CONTENT_BORDER,
    'variant-content-line': variant === FieldVariant.CONTENT_LINE,
    'variant-full-border': variant === FieldVariant.FULL_BORDER,
  });

  const handleClick = (callback?: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    const input = document.getElementById(id);
    input?.focus();
    callback && callback();
  };

  return (
    <FieldStyle className={fieldClassName}>
      {label ? (
        <Typography className='field-label' withoutPadding variant='label-form' htmlFor={id}>
          {label}
        </Typography>
      ) : null}
      <section className='field-content' ref={ref}>
        {getIcon({
          className: 'field-left-icon',
          iconName: leftIcon,
          onClick: handleClick(onClickLeftIcon),
        })}
        <section className='field-children'>{children}</section>
        {getIcon({
          className: 'field-right-icon',
          iconName: rightIcon,
          onClick: handleClick(onClickRightIcon),
        })}
      </section>
      <section className='field-message'>
        {error && errorIcon ? <Icon name={errorIcon} size={10} /> : <span />}
        {error ? (
          <Typography withoutPadding variant='small'>
            {error}
          </Typography>
        ) : null}
      </section>
    </FieldStyle>
  );
};

export const Field = React.forwardRef(FieldComponent);
