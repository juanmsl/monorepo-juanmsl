import { Suspense, lazy } from 'react';

const HomeWrapper = lazy(() => import('./home').then(module => ({ default: module.Home })));

export const LazyHome = () => {
  return (
    <Suspense>
      <HomeWrapper />
    </Suspense>
  );
};
