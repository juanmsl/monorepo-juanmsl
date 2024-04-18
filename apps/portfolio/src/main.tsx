import { FetchProvider, IconProvider, ThemeProvider } from '@juanmsl/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';

import { LoaderLogo } from '@components/ui';
import { ENV } from '@core/env';
import { GA } from '@core/ga';
import '@core/i18n';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from '@core/theme';
import { Router } from '@router';

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
                <BrowserRouter>
                  <Router />
                </BrowserRouter>
              </ErrorBoundary>
            </Suspense>
          </QueryClientProvider>
        </IconProvider>
      </ThemeProvider>
    </FetchProvider>
  </React.StrictMode>,
);
