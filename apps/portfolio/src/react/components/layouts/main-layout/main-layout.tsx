import { Footer } from '@components/ui';
import { MainLayoutStyle } from './main-layout.style';
import { PATHS } from '@core/constants';
import { NavLink, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <NavLink to={PATHS.HOME_URL}>
        <img loading='lazy' className='layout-logo' src='/assets/images/logo.png' alt='logo' />
      </NavLink>
      <div className='main-layout-content'>
        <Outlet />
      </div>
      <Footer />
    </MainLayoutStyle>
  );
};
