import { useEffect, useState } from "react";
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

type Planets = Planet[];

type ResponsePlanets = {
  results: Planets;
  next: string;
  previous: string;
  count: number;
};

const PlanetList: React.FC = () => {
  const { data } = useFetch<ResponsePlanets>("https://swapi.dev/api/planets");

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {data?.results.map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetList;
