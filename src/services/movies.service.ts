export const fetchMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/a2d7fc043d0041b2b745d71112394bac/movies"
  );
  return response.json();
};
