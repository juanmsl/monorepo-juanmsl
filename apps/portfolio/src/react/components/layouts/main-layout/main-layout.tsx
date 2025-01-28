import { Image } from 'polpo/ui';
import { NavLink, Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { PageTransition } from '@components/animations';
import { Aside, Footer, LayoutActions } from '@components/ui';
import { PATHS } from '@core/constants';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <LayoutActions />
        <Aside>
          <NavLink to={PATHS.HOME_URL}>
            <Image className='layout-logo' src='/assets/images/logo.png' alt='logo' />
          </NavLink>
          <section className='main-layout-content'>
            <Outlet />
          </section>
          <Footer />
        </Aside>
      </MainLayoutStyle>
    </PageTransition>
  );
};
