import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { PageTransition } from '@components/animations';

export const MainLayout = () => {
  return (
    <PageTransition>
      <MainLayoutStyle>
        <Outlet />
      </MainLayoutStyle>
    </PageTransition>
  );
};
