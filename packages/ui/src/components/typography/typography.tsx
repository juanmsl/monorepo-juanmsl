import { useClassNames } from '@juanmsl/hooks';
import React, { HTMLAttributes, createElement, forwardRef, useMemo } from 'react';

import {
  TypographyVariant,
  TypographyVariantsClassNames,
  TypographyVariantsElements,
  TypographyWeight,
} from './typography.constants';

type TypographyProps = HTMLAttributes<HTMLElement | HTMLLabelElement> & {
  variant?: `${TypographyVariant}`;
  nowrap?: boolean;
  as?: keyof React.ReactHTML;
  weight?: `${TypographyWeight}`;
  children: React.ReactNode;
  noPadding?: boolean;
  htmlFor?: string;
  align?: React.CSSProperties['textAlign'];
  family?: 'primary' | 'code';
};

export const TypographyComponent = (
  {
    variant = 'body',
    nowrap = false,
    className: customClassname = '',
    style = {},
    children,
    as,
    weight,
    family = 'primary',
    noPadding = false,
    align,
    htmlFor,
    ...props
  }: TypographyProps,
  ref: React.ForwardedRef<unknown>,
) => {
  const className = useClassNames({
    [TypographyVariantsClassNames[variant]]: TypographyVariantsClassNames[variant] !== undefined,
    [customClassname]: !!customClassname,
    [weight ?? '']: !!weight,
    'no-padding': noPadding,
    'code-family': family === 'code',
    nowrap: nowrap,
  });

  const component = useMemo(
    () => TypographyVariantsElements[variant] ?? TypographyVariantsElements[TypographyVariant.BODY],
    [variant],
  );

  return createElement(
    as ?? component,
    {
      ...props,
      className,
      ref,
      htmlFor,
      style: {
        textAlign: align,
        ...style,
      },
    },
    children,
  );
};

export const Typography = forwardRef(TypographyComponent);
