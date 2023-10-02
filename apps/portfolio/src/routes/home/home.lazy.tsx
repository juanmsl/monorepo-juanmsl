import {lazy, Suspense} from "react";
import {LoaderLogo} from "@/components/ui";

const HomeWrapper = lazy(() => import('./home'));

export function LazyHome() {
  return (
    <Suspense fallback={<LoaderLogo />}>
      <HomeWrapper />
    </Suspense>
  );
}
