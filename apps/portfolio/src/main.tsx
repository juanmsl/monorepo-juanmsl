import { ENV } from '@core/env';
import { LoaderLogo } from '@components/ui';
import ReactDOM from 'react-dom/client';
import { RootLayout } from '@components/layouts';
import { ga4react } from '@core/ga';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from '@core/theme';
import { FetchProvider, IconProvider, ThemeProvider } from '@juanmsl/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import './styles.scss';
import '@core/i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ga4react.initialize().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <FetchProvider baseURL={ENV.API_URL}>
        <ThemeProvider
          lightTheme={LightTheme}
          darkTheme={DarkTheme}
          commonTheme={CommonTheme}
          constants={ThemeConstants}
        >
          <IconProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<LoaderLogo />}>
                <RootLayout />
              </Suspense>
            </QueryClientProvider>
          </IconProvider>
        </ThemeProvider>
      </FetchProvider>
    </React.StrictMode>,
  );
});
