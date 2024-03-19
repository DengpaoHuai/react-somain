import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../components/PlanetList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetList />,
  },
]);

export default router;
