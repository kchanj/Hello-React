import { useState } from 'react'

/**
 * Custom Hook
 * - 명명규칙 준수: useXxxxx
 * - 일반 Javascript와 다른 점은 다른 Hook를 사용할 수 있음
 */
const useCounter = (initialValue = 0) => {
    
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    return { count, increment, decrement }
}

export default useCounter