import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { FetchProvider, ThemeProvider } from 'polpo/ui';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { LoaderLogo } from '@components/ui';
import { ENV } from '@core/env';
import '@core/i18n';
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
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoaderLogo />}>
            <ErrorBoundary fallback={<p>Error</p>}>
              <ThemeProvider.Wrapper>
                <BrowserRouter>
                  <Analytics />
                  <SpeedInsights />
                  <Router />
                </BrowserRouter>
              </ThemeProvider.Wrapper>
            </ErrorBoundary>
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </FetchProvider>
  </React.StrictMode>,
);
