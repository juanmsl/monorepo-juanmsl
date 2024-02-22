import { LoaderLogo } from '@components/ui';
import { PageTransition } from '@components/animations';
import { Suspense, lazy } from 'react';

const HomeWrapper = PageTransition(lazy(() => import('./home').then((module) => ({ default: module.Home }))));

export const LazyHome = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <HomeWrapper />
    </Suspense>
  );
};
