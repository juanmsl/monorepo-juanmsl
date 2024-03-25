import { AnimatePresence } from 'framer-motion';
import { GA } from '@core/ga';
import { MainLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { useEffect } from 'react';
import { LazyBlog, LazyHome, LazyProjects, LazyResume } from '@pages';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export const Router = () => {
  const location = useLocation();

  useEffect(() => {
    GA.pageView(location.pathname + location.search);
    GA.webVitals();
  }, [location]);

  useEffect(() => {
    if (window.performance) {
      GA.event({
        action: 'load',
        label: 'timing_complete',
        value: Math.round(performance.now()),
        category: GA.categories.JS_DEPENDENCIES,
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
