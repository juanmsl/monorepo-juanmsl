import React, { Suspense, useCallback, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { TypographyStyle } from '../../components/typography/typography.style';

import { GlobalAnimations } from './theme.animations';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from './theme.defaults';
import { GlobalStyles, ThemeStyle } from './theme.style';
import { CommonThemeEntity, PaletteThemeEntity, ThemeConstantsEntity, ThemeEntity } from './themes';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContext = {
  themeName: `${THEME}`;
  changeTheme: (theme: `${THEME}`) => void;
  toggleTheme: () => void;
  setSystemTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContext | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  commonTheme?: CommonThemeEntity;
  lightTheme?: PaletteThemeEntity;
  darkTheme?: PaletteThemeEntity;
  constants?: ThemeConstantsEntity;
};

export const ThemeProvider = ({
  children,
  commonTheme = CommonTheme,
  lightTheme = LightTheme,
  darkTheme = DarkTheme,
  constants = ThemeConstants,
}: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<`${THEME}`>(THEME.DARK);
  const [systemThemeName, setSystemThemeName] = useState<`${THEME}`>(THEME.DARK);
  const [useSystemTheme, setUseSystemTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-name');

    if (!savedTheme || ![THEME.DARK, THEME.LIGHT].includes(savedTheme as THEME)) {
      setUseSystemTheme(true);
      localStorage.setItem('theme-name', 'system');
    } else {
      setThemeName(savedTheme as `${THEME}`);
      localStorage.setItem('theme-name', savedTheme);
    }
  }, []);

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent) => {
      setSystemThemeName(e.matches ? THEME.DARK : THEME.LIGHT);
    };

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemThemeName(darkThemeMq.matches ? THEME.DARK : THEME.LIGHT);
    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  const setSystemTheme = useCallback(() => {
    localStorage.setItem('theme-name', 'system');
    setUseSystemTheme(true);
  }, []);

  const changeTheme = useCallback(
    (themeName: `${THEME}`) => {
      setThemeName(themeName);
      localStorage.setItem('theme-name', themeName);

      if (useSystemTheme) {
        setUseSystemTheme(false);
      }
    },
    [useSystemTheme],
  );

  const toggleTheme = useCallback(() => {
    setThemeName(prev => {
      let theme = prev === 'light' ? 'dark' : 'light';

      if (useSystemTheme) {
        theme = systemThemeName === 'light' ? 'dark' : 'light';
        setUseSystemTheme(false);
      }

      localStorage.setItem('theme-name', theme);

      return theme as `${THEME}`;
    });
  }, [systemThemeName, useSystemTheme]);

  const themes: Record<THEME, ThemeEntity> = {
    light: {
      ...commonTheme,
      ...lightTheme,
    },
    dark: {
      ...commonTheme,
      ...darkTheme,
    },
  };

  return (
    <Suspense>
      <ThemeContext.Provider
        value={{
          themeName: useSystemTheme ? systemThemeName : themeName,
          changeTheme,
          toggleTheme,
          setSystemTheme,
        }}
      >
        <StyledThemeProvider
          theme={{
            colors: themes[useSystemTheme ? systemThemeName : themeName],
            constants: constants,
          }}
        >
          <GlobalStyles />
          <GlobalAnimations />
          <TypographyStyle />
          <ThemeStyle>{children}</ThemeStyle>
        </StyledThemeProvider>
      </ThemeContext.Provider>
    </Suspense>
  );
};

export const useMyTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useFetch must be used with in a ThemeProvider');
  }

  return context;
};
