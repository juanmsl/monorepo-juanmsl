import { LoaderLogo } from '@components/ui';
import { PageTransition } from '@components/animations';
import { Suspense, lazy } from 'react';

const ResumeWrapper = PageTransition(lazy(() => import('./resume').then(module => ({ default: module.Resume }))));

export const LazyResume = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <ResumeWrapper />
    </Suspense>
  );
};
