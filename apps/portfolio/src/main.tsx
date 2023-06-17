import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp, Providers } from './core/infrastructure';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <MainApp />
    </Providers>
  </React.StrictMode>,
);
