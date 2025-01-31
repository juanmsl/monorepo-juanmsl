import React, { HTMLAttributes, createElement, forwardRef, useMemo } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

import { ColorVariants } from '../../core/variants';

import {
  TypographyVariant,
  TypographyVariantsClassNames,
  TypographyVariantsElements,
  TypographyWeight,
} from './typography.constants';

import { useClassNames } from '@polpo/hooks';

const getTypographyColor = (theme: DefaultTheme, color?: `${ColorVariants}`): React.CSSProperties => {
  const typographyColors: Record<ColorVariants, React.CSSProperties> = {
    [ColorVariants.Primary]: { color: theme.colors.primary.main },
    [ColorVariants.Secondary]: { color: theme.colors.secondary.main },
    [ColorVariants.Tertiary]: { color: theme.colors.tertiary.main },
    [ColorVariants.Info]: { color: theme.colors.info.main },
    [ColorVariants.Active]: { color: theme.colors.active.main },
    [ColorVariants.Warning]: { color: theme.colors.warning.main },
    [ColorVariants.Alert]: { color: theme.colors.alert.main },
  };

  return (color && typographyColors[color]) ?? {};
};

type TypographyProps = HTMLAttributes<HTMLElement | HTMLLabelElement> & {
  variant?: `${TypographyVariant}`;
  nowrap?: boolean | number;
  as?: keyof React.ReactHTML;
  weight?: `${TypographyWeight}`;
  children: React.ReactNode;
  noPadding?: boolean;
  htmlFor?: string;
  align?: React.CSSProperties['textAlign'];
  family?: 'primary' | 'code';
  recommendedWidth?: boolean;
  color?: `${ColorVariants}`;
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
    color,
    htmlFor,
    recommendedWidth = false,
    ...props
  }: TypographyProps,
  ref: React.ForwardedRef<unknown>,
) => {
  const theme = useTheme();
  const className = useClassNames({
    [TypographyVariantsClassNames[variant]]: TypographyVariantsClassNames[variant] !== undefined,
    [customClassname]: !!customClassname,
    [weight ?? '']: !!weight,
    'no-padding': noPadding,
    'code-family': family === 'code',
    'recommended-width': recommendedWidth,
    'nowrap-max-lines': typeof nowrap === 'number',
    'nowrap-max-lines-2': nowrap === 2,
    'nowrap-max-lines-3': nowrap === 3,
    'nowrap-max-lines-4': nowrap === 4,
    'nowrap-max-lines-5': nowrap === 5,
    nowrap: nowrap === true,
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
        ...getTypographyColor(theme, color),
        ...style,
      },
    },
    children,
  );
};

export const Typography = forwardRef(TypographyComponent);
