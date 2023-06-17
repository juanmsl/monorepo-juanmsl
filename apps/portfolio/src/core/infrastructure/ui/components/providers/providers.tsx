import { DarkTheme, EN, ENV, ES, LightTheme, ThemeConstants } from '../../../../domain';
import { FetchProvider, IconProvider, LanguageProvider, ThemeProvider } from '@juanmsl/ui';
import { FC, ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <FetchProvider baseURL={ENV.API_URL}>
    <LanguageProvider
      lngResources={{
        es: ES,
        en: EN,
      }}
    >
      <ThemeProvider constants={ThemeConstants} lightTheme={LightTheme} darkTheme={DarkTheme}>
        <IconProvider>{children}</IconProvider>
      </ThemeProvider>
    </LanguageProvider>
  </FetchProvider>
);
