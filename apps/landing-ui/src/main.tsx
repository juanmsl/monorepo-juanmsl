import { IconProvider, ThemeProvider } from '@juanmsl/ui';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { SimpleLoader } from '@components/loaders';
import '@core/i18n';
import { CommonTheme, DarkTheme, LightTheme, ThemeConstants } from '@core/theme';
import { Router } from '@router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider lightTheme={LightTheme} darkTheme={DarkTheme} commonTheme={CommonTheme} constants={ThemeConstants}>
      <IconProvider>
        <Suspense fallback={<SimpleLoader />}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Suspense>
      </IconProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
