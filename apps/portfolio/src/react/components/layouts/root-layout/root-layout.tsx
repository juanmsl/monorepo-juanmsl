import { BrowserRouter } from 'react-router-dom';
import { RootLayoutStyle } from './root-layout.style';
import { Router } from '@router';

export const RootLayout = () => {
  return (
    <RootLayoutStyle>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RootLayoutStyle>
  );
};
