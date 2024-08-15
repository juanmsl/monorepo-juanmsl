import { FetchProvider, ThemeProvider } from '@juanmsl/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { LoaderLogo } from '@components/ui';
import { ENV } from '@core/env';
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
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoaderLogo />}>
            <ErrorBoundary fallback={<p>Error</p>}>
              <BrowserRouter>
                <Analytics />
                <SpeedInsights />
                <Router />
              </BrowserRouter>
            </ErrorBoundary>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </FetchProvider>
  </React.StrictMode>,
);
