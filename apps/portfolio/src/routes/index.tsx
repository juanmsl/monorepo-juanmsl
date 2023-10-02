import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import {LazyHome} from "./home";
import {PATHS, PokeAPI} from "@/core";
import {LazyNotFound} from "./not-found";
import {LazyTest} from "./test";
import {MainLayout} from "@/components/layouts";


const router = createBrowserRouter([
  {
    path: PATHS.HOME_URL,
    element: <MainLayout />,
    children: [
      {
        element: <LazyHome />,
        index: true,
      },
      {
        path: PATHS.TEST_URL,
        element: <LazyTest />,
        errorElement: <LazyNotFound />,
        loader: async () => {
          const response = await PokeAPI.getPokemons();

          return {
            pokemons: response.results,
          };
        }
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={PATHS.HOME_URL} />,
  },
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
}
