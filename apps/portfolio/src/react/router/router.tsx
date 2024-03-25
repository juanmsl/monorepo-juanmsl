import { AnimatePresence } from 'framer-motion';
import { GATracker } from '@core/ga';
import { MainLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { LazyBlog, LazyHome, LazyProjects, LazyResume } from '@pages';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <GATracker>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<MainLayout />}>
            <Route path={PATHS.HOME_URL} element={<LazyHome />} index />
            <Route path={PATHS.RESUME_URL} element={<LazyResume />} />
            <Route path={PATHS.BLOG_URL} element={<LazyBlog />} />
            <Route path={PATHS.PROJECTS_URL} element={<LazyProjects />} />
            <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
          </Route>
        </Routes>
      </GATracker>
    </AnimatePresence>
  );
};
