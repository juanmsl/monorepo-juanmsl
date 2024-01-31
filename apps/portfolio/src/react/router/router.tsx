import {createBrowserRouter, Navigate} from "react-router-dom";
import {PATHS} from "@core/constants";
import {LazyHome, LazyNotFound, LazyResume} from "@features";
import {MainLayout} from "@components/layouts";


export const router = createBrowserRouter([
  {
    path: PATHS.HOME_URL,
    element: <MainLayout />,
    children: [
      {
        element: <LazyHome />,
        errorElement: <LazyNotFound />,
        index: true
      },
      {
        path: PATHS.RESUME_URL,
        errorElement: <LazyNotFound />,
        element: <LazyResume />,
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to={PATHS.HOME_URL} />,
  },
]);
