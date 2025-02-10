import { useState, useEffect } from 'react'

const API_BASE_URL = 'http://localhost:3000';

/************************************************************
 * useFetch Custom Hook
 ************************************************************/
const useFetch = (endpoint, options) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //console.log(`[useFetch] Renderd: endpoint= ${endpoint}`);

  useEffect(() => {
    console.log(`[useFetch] Effect: endpoint: ${endpoint}`);
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options)
        if(!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint, options])

  return { data, error, loading }
}

export default useFetch;