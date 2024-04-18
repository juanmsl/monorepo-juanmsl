import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { PATHS } from '@core/constants';
import { GA } from '@core/ga';
import { LazyHome } from '@pages';

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
        <Route path={PATHS.HOME_URL} element={<LazyHome />} index />
        <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
      </Routes>
    </AnimatePresence>
  );
};
