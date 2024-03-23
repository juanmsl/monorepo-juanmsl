import { LoaderLogo } from '@components/ui';
import { Suspense, lazy } from 'react';

const ResumeWrapper = lazy(() => import('./resume').then(module => ({ default: module.Resume })));

export const LazyResume = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <ResumeWrapper />
    </Suspense>
  );
};
