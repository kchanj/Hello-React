import { useState, useEffect } from 'react'

const API_BASE_URL = 'http://localhost:3000'

const useFetch = (endpoint, options) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    //console.log(`[   useFetch] Effect: endpoint:${endpoint}`);
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        
        const result = await response.json()
        setData(result);
        //console.log(`[   useFetch] Result: data=${result ? result.length : 0}`);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, options])

  return { data, loading, error }
}

export default useFetch;