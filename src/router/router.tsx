import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../pages/PlanetList";
import SecondPage from "../pages/SecondPage";
import CreateMoviePage from "../pages/CreateMoviePage";
import ListMovies from "../pages/ListMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetList />,
  },
  {
    path: "/demo",
    element: <SecondPage />,
  },
  {
    path: "/create_movie",
    element: <CreateMoviePage />,
  },
  {
    path: "/list",
    element: <ListMovies />,
  },
]);

export default router;
