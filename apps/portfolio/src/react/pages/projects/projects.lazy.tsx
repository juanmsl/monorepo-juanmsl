import { LoaderLogo } from '@components/ui';
import { Suspense, lazy } from 'react';

const ProjectsWrapper = lazy(() => import('./projects').then(module => ({ default: module.Projects })));

export const LazyProjects = () => {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <ProjectsWrapper />
    </Suspense>
  );
};
