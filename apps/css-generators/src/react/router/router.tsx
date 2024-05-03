import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout, SandboxLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { GA } from '@core/ga';
import { LazyBoxShadow, LazyHome, LazyTextShadow } from '@pages';

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
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<MainLayout />}>
          <Route path={PATHS.HOME_URL} element={<LazyHome />} index />
          <Route path='/' element={<SandboxLayout />}>
            <Route path={PATHS.BOX_SHADOW_URL} element={<LazyBoxShadow />} />
            <Route path={PATHS.TEXT_SHADOW_URL} element={<LazyTextShadow />} />
          </Route>
          <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
