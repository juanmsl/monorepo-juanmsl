import {lazy, Suspense} from "react";
import {LoaderLogo} from "@/components/ui";

const NotFoundWrapper = lazy(() => import('./not-found'));

export function LazyNotFound() {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <NotFoundWrapper />
    </Suspense>
  );
}
