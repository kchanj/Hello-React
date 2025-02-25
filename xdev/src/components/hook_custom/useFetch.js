import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);

                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error('Fetch Eerror');
                }

                const json = await response.json();
                setData(json);
            } catch(e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return {data, error, loading}
}

export default useFetch;