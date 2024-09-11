import { CommonThemeEntity, PaletteThemeEntity, ThemeConstantsEntity } from './themes';

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
  info: {
    main: '#0581ff',
    contrast: '#FFFFFF',
    light: '#7bc1ff',
    dark: '#0057b5',
  },
  active: {
    main: '#00B450',
    contrast: '#FFFFFF',
    light: '#3dd581',
    dark: '#029341',
  },
  warning: {
    main: '#FFA300',
    contrast: '#FFFFFF',
    light: '#ffc97a',
    dark: '#a16903',
  },
  alert: {
    main: '#F95F62',
    contrast: '#FFFFFF',
    light: '#ff9c9d',
    dark: '#b1282b',
  },
};

export const DarkTheme: PaletteThemeEntity = {
  background: {
    main: '#24263A',
    paper: '#212335',
  },
  text: {
    main: '#FFFFFF',
    light: '#FFFFFF',
    dark: '#efefef',
  },
  border: {
    main: '#2b3135',
  },
  primary: {
    main: '#B91345',
    contrast: '#FFFFFF',
    light: '#fa2f6d',
    dark: '#880a2f',
  },
  secondary: {
    main: '#161723',
    contrast: '#FFFFFF',
    light: '#27283e',
    dark: '#0b0b15',
  },
  tertiary: {
    main: '#012e64',
    contrast: '#FFFFFF',
    light: '#033f83',
    dark: '#011c42',
  },
};

export const LightTheme: PaletteThemeEntity = {
  background: {
    main: '#FFFFFF',
    paper: '#efefef',
  },
  text: {
    main: '#333333',
    light: '#434242',
    dark: '#1c1b1b',
  },
  border: {
    main: '#ececec',
  },
  primary: {
    main: '#450b7c',
    contrast: '#FFFFFF',
    light: '#5c11a3',
    dark: '#33075c',
  },
  secondary: {
    main: '#563cc9',
    contrast: '#FFFFFF',
    light: '#6d50e4',
    dark: '#3e2795',
  },
  tertiary: {
    main: '#49e9fb',
    contrast: '#333333',
    light: '#a2edff',
    dark: '#1fa5b5',
  },
};
