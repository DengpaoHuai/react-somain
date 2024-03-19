import { useState } from "react";
import useFetch from "../hooks/useFetch";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
};

type ResponsePlanets = {
  results: Planet[];
  next: string;
  previous: string;
  count: number;
};

const PlanetList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetch<ResponsePlanets>(
    "https://swapi.dev/api/planets",
    page
  );

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {data?.results.map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ul>
      <button
        disabled={data?.previous === null}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        previous
      </button>
      <button
        disabled={data?.next === null}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default PlanetList;
