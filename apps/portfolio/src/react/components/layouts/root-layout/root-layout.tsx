import { BrowserRouter } from 'react-router-dom';
import { RootLayoutStyle } from './root-layout.style';
import { Router } from '@router';
import { LanguageSelector, Navbar, ThemeSelector } from '@components/ui';

export const RootLayout = () => {
  return (
    <RootLayoutStyle>
      <BrowserRouter>
        <Navbar />
        <div className='root-layout-actions'>
          <ThemeSelector />
          <LanguageSelector />
        </div>
        <Router />
      </BrowserRouter>
    </RootLayoutStyle>
  );
};
