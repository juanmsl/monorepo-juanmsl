import { MainLayout } from '@components/layouts';
import { PATHS } from '@core/constants';
import { LazyHome, LazyNotFound, LazyResume } from '@features';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: PATHS.HOME_URL,
    element: <MainLayout />,
    children: [
      {
        element: <LazyHome />,
        errorElement: <LazyNotFound />,
        index: true,
      },
      {
        path: PATHS.RESUME_URL,
        errorElement: <LazyNotFound />,
        element: <LazyResume />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={PATHS.HOME_URL} />,
  },
]);
