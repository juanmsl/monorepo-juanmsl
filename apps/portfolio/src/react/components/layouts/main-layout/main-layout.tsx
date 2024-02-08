import { MainLayoutStyle } from './main-layout.style';
import { Navbar } from '@components/ui/navbar';
import { Outlet } from 'react-router-dom';
import { Footer, LanguageSelector, ThemeSelector } from '@components/ui';

export const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <img className="layout-logo" src="/assets/images/logo.png" alt="logo" />
      <Navbar />
      <div className="layout-actions">
        <ThemeSelector />
        <LanguageSelector />
      </div>
      <div className="main-layout-content">
        <Outlet />
      </div>
      <Footer />
    </MainLayoutStyle>
  );
};
