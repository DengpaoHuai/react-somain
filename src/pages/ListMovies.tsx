import { useEffect, useState } from "react";

type Movie = {
  name: string;
  rating: string;
};

const ListMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/a2d7fc043d0041b2b745d71112394bac/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.name}>
            {movie.name} - {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
