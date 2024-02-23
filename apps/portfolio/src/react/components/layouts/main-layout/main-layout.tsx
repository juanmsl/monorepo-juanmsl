import { MainLayoutStyle } from './main-layout.style';
import { Navbar } from '@components/ui/navbar';
import { PATHS } from '@core/constants';
import { Footer, LanguageSelector, ThemeSelector } from '@components/ui';
import { NavLink, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <NavLink to={PATHS.HOME_URL}>
        <img className='layout-logo' src='/assets/images/logo.png' alt='logo' />
      </NavLink>
      <Navbar />
      <div className='layout-actions'>
        <ThemeSelector />
        <LanguageSelector />
      </div>
      <div className='main-layout-content'>
        <Outlet />
      </div>
      <Footer />
    </MainLayoutStyle>
  );
};
