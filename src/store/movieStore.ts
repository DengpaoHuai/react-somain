import { useEffect } from "react";
import { create } from "zustand";
import { fetchMovies } from "../services/movies.service";

type Movie = {
  _id: string;
  name: string;
  rating: string;
};

type MovieStore = {
  movies: Movie[];
  setMovies: () => void;
  createMovie: (movie: Omit<Movie, "_id">) => Promise<void>;
};

export const getMoviesSelector = (state: MovieStore) => state.movies;

const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  setMovies: () => {
    fetchMovies().then((movies) => set({ movies: movies }));
  },
  createMovie: async (movie: Omit<Movie, "_id">) => {
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
    set((state) => ({ movies: [...state.movies, data] }));
  },
}));

export const useMovies = () => {
  const { movies, setMovies, createMovie } = useMovieStore();

  useEffect(() => {
    setMovies();
  }, []);

  return {
    movies,
    createMovie,
  };
};

export default useMovieStore;
