import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetching data failed", error);
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
