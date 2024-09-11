import { ThemeProvider } from '@juanmsl/ui';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@core/i18n';
import { Router } from '@router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
