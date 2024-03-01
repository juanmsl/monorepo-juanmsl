import { MainLayoutStyle } from './main-layout.style';
import { PATHS } from '@core/constants';
import { PageTransition } from '@components/animations';
import { Aside, Footer, LayoutActions } from '@components/ui';
import { NavLink, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <LayoutActions />
        <Aside>
          <NavLink to={PATHS.HOME_URL}>
            <img loading='lazy' className='layout-logo' src='/assets/images/logo.png' alt='logo' />
          </NavLink>
          <div className='main-layout-content'>
            <Outlet />
          </div>
          <Footer />
        </Aside>
      </MainLayoutStyle>
    </PageTransition>
  );
};
