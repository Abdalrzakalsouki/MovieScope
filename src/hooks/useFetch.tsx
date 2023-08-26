import { useState, useEffect } from "react";

const useFetch = <T,>(url: string, key: string) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const opitions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
    };
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await fetch(url, opitions);
        const response = await request.json();
        setData(response);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, key]);
  return { data, loading, error };
};

export default useFetch;
