import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../pages/PlanetList";
import SecondPage from "../pages/SecondPage";
import CreateMoviePage from "../pages/CreateMoviePage";
import ListMovies from "../pages/ListMovies";
import MainLayoutMovies from "../layouts/MainLayoutMovies";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    element: <MainLayoutMovies />,
    children: [
      {
        path: "/create_movie",
        element: <CreateMoviePage />,
      },
      {
        path: "/list",
        element: <ListMovies />,
      },
    ],
  },
  {
    path: "/",
    element: <PlanetList />,
  },
  {
    path: "/demo",
    element: <SecondPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
