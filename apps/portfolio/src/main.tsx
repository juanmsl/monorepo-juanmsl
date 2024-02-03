import { ENV } from '@core/env';
import { LoaderLogo } from '@components/ui';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@router';
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
    <Suspense fallback={<LoaderLogo />}>
      <FetchProvider baseURL={ENV.API_URL}>
        <ThemeProvider>
          <IconProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<LoaderLogo />}>
                <RouterProvider router={router} />
              </Suspense>
            </QueryClientProvider>
          </IconProvider>
        </ThemeProvider>
      </FetchProvider>
    </Suspense>
  </React.StrictMode>,
);
