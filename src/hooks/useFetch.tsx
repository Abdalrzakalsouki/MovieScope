import { useState, useEffect } from "react";

interface ApiResponse {
  results: object[];
}
const useFetch = (url: string, key: string) => {
  const [data, setData] = useState<ApiResponse>();
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
