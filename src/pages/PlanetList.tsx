import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { fetchPlanets } from "../services/planets.service";
import { useQuery } from "@tanstack/react-query";
import CustomCardComponent, {
  CustomCardComponentWithSyled,
} from "../components/CustomCardComponent";
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
  const { isLoading, data, isError, error } = useQuery<ResponsePlanets>({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    gcTime: 1000 * 60 * 5,
    staleTime: 5000,
  });

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <CustomCardComponentWithSyled title="Planets" footer="Footer">
        <p>children</p>
      </CustomCardComponentWithSyled>
      <h2>Planets</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message}</p>}
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
      <a href="/demo">Go to demo Page</a>
      <Link to="/demo">Go to demo Page</Link>
    </div>
  );
};

export default PlanetList;
