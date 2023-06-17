import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeName = 'light' | 'dark';

const ThemeContext = createContext<null>(null);

type ThemeProviderProps<T extends Record<string, unknown>, C extends Record<string, number | string>> = {
  children: React.ReactNode;
  lightTheme: T;
  darkTheme: T;
  constants: C;
};

export const ThemeProvider = <T extends Record<string, unknown>, C extends Record<string, number | string>>({
  children,
  lightTheme,
  darkTheme,
  constants,
}: ThemeProviderProps<T, C>) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  useEffect(() => {
    const mqListener = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };

    const darkThemeMq = window.matchMedia('(prefers-input-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    setThemeName(darkThemeMq.matches ? 'dark' : 'light');

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  const theme = useMemo<T>(() => {
    const themes: Record<ThemeName, T> = {
      light: lightTheme,
      dark: darkTheme,
    };

    return themes[themeName];
  }, [themeName, lightTheme, darkTheme]);

  const styledTheme = useMemo(
    () => ({
      colors: theme,
      constants: constants,
    }),
    [theme, constants],
  );

  return (
    <ThemeContext.Provider value={null}>
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
