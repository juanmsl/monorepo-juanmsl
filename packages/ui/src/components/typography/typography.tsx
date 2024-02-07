import { TypographyStyle } from './typography.style';
import { useClassNames } from '../../hooks';
import { HTMLAttributes, createElement, forwardRef, useMemo } from 'react';
import { TypographyVariant, TypographyWeight } from './typography.constants';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: `${TypographyVariant}`;
  nowrap?: boolean;
  as?: keyof React.ReactHTML;
  weight?: `${TypographyWeight}`;
  children: React.ReactNode;
  withoutPadding?: boolean;
};
export const TypographyComponent = (
  {
    variant = 'body',
    nowrap = false,
    className: customClassname = '',
    children,
    as,
    weight,
    withoutPadding = false,
    ...props
  }: TypographyProps,
  ref: React.ForwardedRef<unknown>,
) => {
  const className = useClassNames({
    [variant]: true,
    [customClassname]: !!customClassname,
    [weight ?? '']: !!weight,
    'no-padding': withoutPadding,
    nowrap: nowrap,
  });

  const component = useMemo<keyof React.ReactHTML>(() => {
    if (as) {
      return as;
    }

    switch (variant) {
      case TypographyVariant.HERO:
      case TypographyVariant.HEADER1:
        return 'h1';
      case TypographyVariant.HEADER2:
        return 'h2';
      case TypographyVariant.HEADER3:
        return 'h3';
      case TypographyVariant.HEADER4:
        return 'h4';
      case TypographyVariant.BODY:
        return 'p';
      case TypographyVariant.LABEL:
        return 'label';
      case TypographyVariant.SMALL:
        return 'small';
      default:
        return 'p';
    }
  }, [as, variant]);

  return (
    <>
      <TypographyStyle />
      {createElement(
        component,
        {
          ...props,
          className,
          ref,
          style: { fontWeight: weight },
        },
        children,
      )}
    </>
  );
};

export const Typography = forwardRef(TypographyComponent);
