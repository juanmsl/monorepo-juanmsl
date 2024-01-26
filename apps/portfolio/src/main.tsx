import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';

import './core/i18n.tsx';
import { ENV } from "./core";
import {FetchProvider, IconProvider, ThemeProvider} from "@juanmsl/ui";
import {LoaderLogo} from "./components/ui";
import {Routes} from "./routes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoaderLogo />}>
      <FetchProvider baseURL={ENV.API_URL}>
        <ThemeProvider>
          <IconProvider>
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
          </IconProvider>
        </ThemeProvider>
      </FetchProvider>
    </Suspense>
  </React.StrictMode>,
);
