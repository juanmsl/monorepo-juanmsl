import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { MainLayout, SandboxLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { LazyBoxShadow, LazyHome, LazyTextShadow } from '@pages';

export const Router = () => {
  const location = useLocation();

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
