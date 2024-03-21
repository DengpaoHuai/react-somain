import { Outlet } from "react-router-dom";
import MoviesContextProvider from "../contexts/MoviesContextProvider";

const MainLayoutMovies = () => {
  return (
    <MoviesContextProvider>
      <div>
        <Outlet></Outlet>
      </div>
    </MoviesContextProvider>
  );
};

export default MainLayoutMovies;
