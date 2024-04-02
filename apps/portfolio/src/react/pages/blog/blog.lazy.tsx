import { Suspense, lazy } from 'react';

import { LoaderLogo } from '@components/ui';

const BlogWrapper = lazy(() => import('./blog').then(module => ({ default: module.Blog })));

export const LazyBlog = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <BlogWrapper />
    </Suspense>
  );
};
