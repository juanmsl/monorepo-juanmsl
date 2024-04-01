import { ENV } from '@core/env';
import { ErrorBoundary } from 'react-error-boundary';
import { GA } from '@core/ga';
import { LoaderLogo } from '@components/ui';
import ReactDOM from 'react-dom/client';
import { RootLayout } from '@components/layouts';
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FetchProvider baseURL={ENV.API_URL}>
      <ThemeProvider lightTheme={LightTheme} darkTheme={DarkTheme} commonTheme={CommonTheme} constants={ThemeConstants}>
        <IconProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoaderLogo />}>
              <ErrorBoundary
                fallback={<p>Error</p>}
                onError={error => {
                  GA.error(error.message);
                }}
              >
                <RootLayout />
              </ErrorBoundary>
            </Suspense>
          </QueryClientProvider>
        </IconProvider>
      </ThemeProvider>
    </FetchProvider>
  </React.StrictMode>,
);
