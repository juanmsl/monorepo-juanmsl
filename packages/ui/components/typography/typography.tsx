import React, { HTMLAttributes, useMemo} from "react";
import {TypographyStyle} from "./typography.style";
import {useClassNames} from "@juanmsl/hooks";

export enum TypographyVariant {
  HERO = 'hero',
  HEADER1 = 'header1',
  HEADER2 = 'header2',
  HEADER3 = 'header3',
  HEADER4 = 'header4',
  BODY = 'body',
  LABEL = 'label',
  SMALL = 'small',
}

export enum TypographyWeight {
  LIGHT = 'light',
  REGULAR = 'regular',
  BOLD = 'bold',
}

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: `${TypographyVariant}`;
  nowrap?: boolean;
  as?: keyof React.ReactHTML;
  weight?: `${TypographyWeight}`;
  children: React.ReactNode;
  withoutPadding?: boolean;
};
export const Typography = ({
  variant = 'body',
  nowrap = false,
  className: customClassname = '',
  children,
  as,
  weight,
  withoutPadding = false,
  ...props
}: TypographyProps) => {

  const className = useClassNames({
    [variant]: true,
    [customClassname]: !!customClassname,
    [weight ?? '']: !!weight,
    'no-padding': withoutPadding,
    'nowrap': nowrap
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
  }, [variant]);

  return (
    <>
      <TypographyStyle />
      {React.createElement(
        component,
        {
          ...props,
          children,
          className,
          style: { fontWeight: weight },
       }
      )}
    </>
  );
}
