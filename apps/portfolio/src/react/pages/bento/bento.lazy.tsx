import { Suspense, lazy } from 'react';

import { LoaderLogo } from '@components/ui';

const BentoWrapper = lazy(() => import('./bento').then(module => ({ default: module.Bento })));

export const LazyBento = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <BentoWrapper />
    </Suspense>
  );
};
