import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { DarkTheme, Grid, LightTheme, THEME, ThemeProvider } from '../src';

import type { Decorator, Preview } from '@storybook/react';

const ThemeDecorator: Decorator = (Story, context) => {
  const {
    parameters: { theme: parameterTheme },
    globals: { theme: globalTheme },
  } = context;

  const theme = parameterTheme || globalTheme;

  return (
    <>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;700' />
      <ThemeProvider defaultTheme={theme as THEME}>
        <ThemeDecoratorContent>
          <Story />
        </ThemeDecoratorContent>
      </ThemeProvider>
    </>
  );
};

type ThemeDecoratorContentProps = {
  children: React.ReactNode;
};

const ThemeDecoratorContent = ({ children }: ThemeDecoratorContentProps) => {
  const {
    colors: { background },
  } = useTheme();

  useEffect(() => {
    const r = document.querySelector<HTMLElement>(':root');
    r?.style.setProperty('--light-background', LightTheme.background.main);
    r?.style.setProperty('--dark-background', DarkTheme.background.main);
    r?.style.setProperty('--background', background.main);
  }, [background.main]);

  return <Grid style={{ height: '100%', padding: '1em' }}>{children}</Grid>;
};

export const DecoratorGlobalTypes: Preview['globalTypes'] = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'sun', title: 'Light theme' },
        { value: 'dark', icon: 'moon', title: 'Dark theme' },
      ],
      showName: true,
      dynamicTitle: true,
      title: 'Theme',
    },
  },
};

export default [ThemeDecorator];
