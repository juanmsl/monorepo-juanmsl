import { LoaderLogo } from '@components/ui';
import { Suspense, lazy } from 'react';

const BlogWrapper = lazy(() => import('./blog').then(module => ({ default: module.Blog })));

export const LazyBlog = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <BlogWrapper />
    </Suspense>
  );
};
