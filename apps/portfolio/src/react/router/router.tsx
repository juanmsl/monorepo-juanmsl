import { AnimatePresence } from 'framer-motion';
import { MainLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { LazyHome, LazyResume } from '@features';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

export const RouterAnimated = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainLayout />}>
          <Route path={PATHS.HOME_URL} element={<LazyHome />} index />
          <Route path={PATHS.RESUME_URL} element={<LazyResume />} />
          <Route path='*' element={<Navigate to={PATHS.HOME_URL} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
