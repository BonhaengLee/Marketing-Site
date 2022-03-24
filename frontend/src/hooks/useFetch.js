// frontend/src/hooks/useFetch.js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [estate, setEstate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setEstate(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { estate, error, loading, fetchData };
}
