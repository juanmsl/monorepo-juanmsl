import { CommonThemeEntity, PaletteThemeEntity, ThemeConstantsEntity } from '@juanmsl/ui';

export const ThemeConstants: ThemeConstantsEntity = {
  fontFamily: '"Montserrat Alternates", sans-serif',
  sectionMinHeight: '810px',
  breakpoints: {
    mobile: '360px',
    mobileL: '480px',
    tablet: '768px',
    laptopS: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '1920px',
    large: '2560px',
  },
  typography: {
    hero: {
      fontSize: '60px',
      lineHeight: '120%',
      defaultWeight: 'bold',
      weights: {
        bold: 'bold',
      },
      breakpoints: [
        {
          from: 'laptopS',
          fontSize: '80px',
          lineHeight: '120%',
        },
      ],
    },
    header1: {
      fontSize: '48px',
      lineHeight: '120%',
      defaultWeight: 'bold',
      weights: {
        bold: 'bold',
      },
      breakpoints: [
        {
          from: 'laptopS',
          fontSize: '60px',
          lineHeight: '120%',
        },
      ],
    },
    header2: {
      fontSize: '40px',
      lineHeight: '120%',
      defaultWeight: 'bold',
      weights: {
        bold: 'bold',
      },
      breakpoints: [
        {
          from: 'laptopS',
          fontSize: '50px',
          lineHeight: '120%',
        },
      ],
    },
    header3: {
      fontSize: '32px',
      lineHeight: '120%',
      defaultWeight: 'bold',
      weights: {
        bold: 'bold',
      },
      breakpoints: [
        {
          from: 'laptopS',
          fontSize: '40px',
          lineHeight: '120%',
        },
      ],
    },
    header4: {
      fontSize: '24px',
      lineHeight: '120%',
      defaultWeight: 'bold',
      weights: {
        bold: 'bold',
        regular: 'regular',
      },
      breakpoints: [
        {
          from: 'laptopS',
          fontSize: '30px',
          lineHeight: '120%',
        },
      ],
    },
    body: {
      fontSize: '16px',
      lineHeight: '140%',
      defaultWeight: 'regular',
      weights: {
        bold: 'bold',
        regular: 'regular',
        light: 'light',
      },
      breakpoints: [],
    },
    label: {
      fontSize: '14px',
      lineHeight: '140%',
      defaultWeight: 'regular',
      weights: {
        bold: 'bold',
        regular: 'regular',
        light: 'light',
      },
      breakpoints: [],
    },
    small: {
      fontSize: '12px',
      lineHeight: '140%',
      defaultWeight: 'regular',
      weights: {
        bold: 'bold',
        regular: 'regular',
        light: 'light',
      },
      breakpoints: [],
    },
  },
};

export const CommonTheme: CommonThemeEntity = {
  black: '#000000',
  gray1: '#191919',
  gray2: '#323232',
  gray3: '#4B4B4B',
  gray4: '#646464',
  gray5: '#4B4B4B',
  gray6: '#969696',
  gray7: '#CCCCCC',
  gray8: '#DEDEDE',
  gray9: '#F0F0F0',
  white: '#FFFFFF',
};

export const DarkTheme: PaletteThemeEntity = {
  background: '#24263A',
  text: '#FFFFFF',
  primary: '#B91345',
  primaryContrast: '#FFFFFF',
  secondary: '#161723',
  secondaryContrast: '#FFFFFF',
  tertiary: '#012e64',
  tertiaryContrast: '#FFFFFF',
};

export const LightTheme: PaletteThemeEntity = {
  ...CommonTheme,
  background: '#FFFFFF',
  text: '#333333',
  primary: '#450b7c',
  primaryContrast: '#FFFFFF',
  secondary: '#563cc9',
  secondaryContrast: '#FFFFFF',
  tertiary: '#49e9fb',
  tertiaryContrast: '#333333',
};
