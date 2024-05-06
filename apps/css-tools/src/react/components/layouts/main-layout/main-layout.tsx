import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { PageTransition } from '@components/animations';
import { Footer } from '@components/ui';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <Outlet />
        <Footer />
      </MainLayoutStyle>
    </PageTransition>
  );
};
