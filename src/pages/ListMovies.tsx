import { Link } from "react-router-dom";
import useMovieStore, {
  getMoviesSelector,
  useMovies,
} from "../store/movieStore";
import { useEffect } from "react";

const ListMovies = () => {
  const { movies } = useMovies();

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.name}>
            {movie.name} - {movie.rating}
          </li>
        ))}
      </ul>
      <Link to="/create_movie">Create Movie</Link>
    </div>
  );
};

export default ListMovies;
