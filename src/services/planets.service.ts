export const fetchPlanets = async (page: number) => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return response.json();
};
