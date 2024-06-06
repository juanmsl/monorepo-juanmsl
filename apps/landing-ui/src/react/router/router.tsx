import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout } from '@components/layouts';
import { SimpleLoader } from '@components/loaders';
import { REDIRECT_URL, ROUTES } from '@core/constants';
import { GA } from '@core/ga';

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    GA.pageView(location.pathname + location.search);
    GA.webVitals();
  }, [location]);

  useEffect(() => {
    if (window.performance) {
      GA.gtag('event', 'timing_complete', {
        name: 'load',
        value: Math.round(performance.now()),
        event_category: GA.categories.JS_DEPENDENCIES,
      });
    }
  }, []);

  return (
    <MainLayout>
      <Routes location={location} key={location.key}>
        {ROUTES.map(({ path, Component }, key) => (
          <Route
            path={path}
            key={key}
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
        <Route path='*' element={<Navigate to={REDIRECT_URL} />} />
      </Routes>
    </MainLayout>
  );
};
