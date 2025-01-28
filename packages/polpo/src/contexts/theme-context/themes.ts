import React from 'react';

export enum TypographyVariants {
  HERO = 'hero',
  HEADER1 = 'header1',
  HEADER2 = 'header2',
  HEADER3 = 'header3',
  HEADER4 = 'header4',
  BODY = 'body',
  LABEL = 'label',
  SMALL = 'small',
}
export enum Breakpoints {
  MOBILE = 'mobile',
  MOBILE_L = 'mobileL',
  TABLET = 'tablet',
  LAPTOPS = 'laptopS',
  LAPTOP_M = 'laptopM',
  LAPTOP_L = 'laptopL',
  DESKTOP = 'desktop',
  LARGE = 'large',
}

export type TypographyEntity = {
  fontSize: string;
  lineHeight: string;
  defaultWeight: React.CSSProperties['fontWeight'];
  weights: Record<string, React.CSSProperties['fontWeight']>;
  breakpoints: Array<{
    from: `${Breakpoints}`;
    fontSize: string;
    lineHeight: string;
  }>;
};

export type ThemeConstantsEntity = {
  fontFamily: string;
  sectionMinHeight: string;
  breakpoints: Record<`${Breakpoints}`, string>;
  typography: Record<`${TypographyVariants}`, TypographyEntity>;
};

export type ThemeColor = {
  main: string;
  contrast: string;
  light: string;
  dark: string;
};

export type CommonThemeEntity = {
  black: string;
  white: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  info: ThemeColor;
  active: ThemeColor;
  warning: ThemeColor;
  alert: ThemeColor;
};

export type PaletteThemeEntity = {
  background: {
    main: string;
    paper: string;
    disabled: string;
  };
  text: {
    main: string;
    light: string;
    dark: string;
    disabled: string;
  };
  border: {
    main: string;
  };
  primary: ThemeColor;
  secondary: ThemeColor;
  tertiary: ThemeColor;
};

export type ThemeEntity = PaletteThemeEntity & CommonThemeEntity;

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: ThemeEntity;
    constants: ThemeConstantsEntity;
  }
}
