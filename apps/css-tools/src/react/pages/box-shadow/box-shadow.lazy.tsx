import { Suspense, lazy } from 'react';

const BoxShadowWrapper = lazy(() => import('./box-shadow').then(module => ({ default: module.BoxShadowPage })));

export const LazyBoxShadow = () => {
  return (
    <Suspense>
      <BoxShadowWrapper />
    </Suspense>
  );
};
