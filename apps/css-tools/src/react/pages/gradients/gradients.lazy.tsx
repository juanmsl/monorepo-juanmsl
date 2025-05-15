import { lazy, Suspense } from 'react';

const GradientsWrapper = lazy(() => import('./gradients').then(module => ({ default: module.GradientsPage })));

export const LazyGradients = () => {
  return (
    <Suspense>
      <GradientsWrapper />
    </Suspense>
  );
};
