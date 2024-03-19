import { useEffect, useState } from "react";

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
  const [data, setData] = useState<ResponsePlanets | null>(null);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData("https://swapi.dev/api/planets/");
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      <ul>
        {data?.results.map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (data?.previous) {
            fetchData(data.previous);
          }
        }}
        disabled={!data?.previous}
      >
        Previous
      </button>
      {Array.from({ length: Math.ceil(data?.count / 10) }).map((_, index) => (
        <button
          key={index}
          onClick={() => {
            fetchData(`https://swapi.dev/api/planets/?page=${index + 1}`);
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={!data?.next}
        onClick={() => {
          if (data?.next) {
            fetchData(data.next);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PlanetList;
