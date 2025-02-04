import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if(!response.ok) {
                    throw new Error('Not Ok')
                }
                const result = await response.json()
                setData(result)
            } catch(e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        
        fetchData()
    }, [])

  return { data, loading, error }
}

export default useFetch