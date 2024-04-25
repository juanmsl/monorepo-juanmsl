import { Suspense, lazy } from 'react';

const TextShadowWrapper = lazy(() => import('./text-shadow').then(module => ({ default: module.TextShadowPage })));

export const LazyTextShadow = () => {
  return (
    <Suspense>
      <TextShadowWrapper />
    </Suspense>
  );
};
