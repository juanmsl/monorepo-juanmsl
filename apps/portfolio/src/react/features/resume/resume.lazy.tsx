import {lazy, Suspense} from "react";
import {LoaderLogo} from "@components/ui";

const ResumeWrapper = lazy(() => import('./resume.tsx'));

export function LazyResume() {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <ResumeWrapper />
    </Suspense>
  );
}
