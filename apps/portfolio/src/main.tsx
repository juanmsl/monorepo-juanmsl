import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import {RouterProvider} from "react-router-dom";
import {router} from "@router";
import {LoaderLogo} from "@components/ui";
import ViewportSize from "react-viewport-size";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import '@core/i18n';
import {ENV} from "@core/env";
import {FetchProvider, IconProvider, ThemeProvider} from "@juanmsl/ui";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoaderLogo/>}>
      <FetchProvider baseURL={ENV.API_URL}>
        <ThemeProvider>
          <IconProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={<LoaderLogo/>}>
                <ViewportSize/>
                <RouterProvider router={router}/>
              </Suspense>
            </QueryClientProvider>
          </IconProvider>
        </ThemeProvider>
      </FetchProvider>
    </Suspense>
  </React.StrictMode>,
);
