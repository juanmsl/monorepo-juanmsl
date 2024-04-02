import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { GA } from '@core/ga';
import { LazyBlog, LazyHome, LazyProjects, LazyResume } from '@pages';

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
          <Route path={PATHS.RESUME_URL} element={<LazyResume />} />
          <Route path={PATHS.BLOG_URL} element={<LazyBlog />} />
          <Route path={PATHS.PROJECTS_URL} element={<LazyProjects />} />
          <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
