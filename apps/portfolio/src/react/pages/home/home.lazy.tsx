import { Suspense, lazy } from 'react';

import { LoaderLogo } from '@components/ui';

const HomeWrapper = lazy(() => import('./home').then(module => ({ default: module.Home })));

export const LazyHome = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <HomeWrapper />
    </Suspense>
  );
};
