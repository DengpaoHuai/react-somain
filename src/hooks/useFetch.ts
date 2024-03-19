import { useEffect, useState } from "react";

const useFetch = <T>(url: string, page: number) => {
  const [data, setData] = useState<{
    [key: number]: T | null;
  }>();

  const fetchData = async () => {
    const response = await fetch(url + `?page=${page}`);
    const result: T = await response.json();
    setData({
      ...data,
      [page]: result,
    });
  };

  useEffect(() => {
    if (!data || !data[page]) fetchData();
  }, [page]);

  return {
    data: data ? data[page] : null,
  };
};

export default useFetch;
