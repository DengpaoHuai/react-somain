import { createContext, useContext, useEffect, useState } from "react";

type Movie = {
  _id: string;
  name: string;
  rating: string;
};

type MoviesContext = {
  movies: Movie[];
  createMovie: (movie: Omit<Movie, "_id">) => Promise<void>;
};

export const MoviesContext = createContext<MoviesContext>({} as MoviesContext);

//export const useMovies = () => useContext(MoviesContext);

const MoviesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/a2d7fc043d0041b2b745d71112394bac/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const createMovie = async (movie: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/a2d7fc043d0041b2b745d71112394bac/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    const data: Movie = await response.json();
    setMovies([...movies, data]);
  };

  return (
    <MoviesContext.Provider value={{ movies, createMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
