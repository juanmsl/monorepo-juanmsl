import { ThemeProvider } from '@juanmsl/ui';
import { Montserrat_Alternates } from 'next/font/google';

import './globals.css';

import { StyledComponentsProvider } from '@components/providers';
import { PageWithParams } from '@core/entities';
import { i18nConfig } from '@core/i18n';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from '@core/theme';

import type { Metadata } from 'next';

const fontFamily = Montserrat_Alternates({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Juanmsl UI',
  description: 'Juanmsl UI',
};

export const generateStaticParams = () => {
  return i18nConfig.locales.map(lang => ({ lang }));
};

type RootLayoutProps = PageWithParams<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children, params: { lang } }: RootLayoutProps) => {
  return (
    <html lang={lang} suppressHydrationWarning={true}>
      <body className={fontFamily.className}>
        <StyledComponentsProvider>
          <ThemeProvider
            commonTheme={CommonTheme}
            lightTheme={LightTheme}
            darkTheme={DarkTheme}
            constants={ThemeConstants}
          >
            {children}
          </ThemeProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
