import { Suspense, lazy } from 'react';

import { LoaderLogo } from '@components/ui';

const NotFoundWrapper = lazy(() => import('./not-found').then(module => ({ default: module.NotFound })));

export const LazyNotFound = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <NotFoundWrapper />
    </Suspense>
  );
};
