import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CommonThemeEntity, PaletteThemeEntity, ThemeConstantsEntity, ThemeEntity } from './themes';
import React, { Suspense, useCallback, useContext, useEffect, useState } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContext = {
  themeName: `${THEME}`;
  changeTheme: (theme: `${THEME}`) => void;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContext | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  commonTheme: CommonThemeEntity;
  lightTheme: PaletteThemeEntity;
  darkTheme: PaletteThemeEntity;
  constants: ThemeConstantsEntity;
};

export const ThemeProvider = ({ children, commonTheme, lightTheme, darkTheme, constants }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<`${THEME}`>(THEME.DARK);

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? THEME.DARK : THEME.LIGHT);
    };

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    setThemeName(darkThemeMq.matches ? THEME.DARK : THEME.LIGHT);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  const changeTheme = useCallback((themeName: `${THEME}`) => setThemeName(themeName), []);
  const toggleTheme = useCallback(() => setThemeName((prev) => (prev === 'light' ? 'dark' : 'light')), []);

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
          themeName,
          changeTheme,
          toggleTheme,
        }}
      >
        <StyledThemeProvider
          theme={{
            colors: themes[themeName],
            constants: constants,
          }}
        >
          {children}
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
