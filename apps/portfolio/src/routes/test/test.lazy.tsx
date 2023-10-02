import {lazy, Suspense} from "react";
import {LoaderLogo} from "@/components/ui";

const TestWrapper = lazy(() => import('./test.tsx'));

export function LazyTest() {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <TestWrapper />
    </Suspense>
  );
}
