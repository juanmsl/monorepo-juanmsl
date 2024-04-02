import { Suspense, lazy } from 'react';

import { LoaderLogo } from '@components/ui';

const ResumeWrapper = lazy(() => import('./resume').then(module => ({ default: module.Resume })));

export const LazyResume = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <ResumeWrapper />
    </Suspense>
  );
};
