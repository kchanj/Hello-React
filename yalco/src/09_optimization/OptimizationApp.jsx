import { HelloCallback } from "./components/HelloCallback"
import { HelloMemo } from "./components/HelloMemo"
import { HelloMemoHOC } from "./components/HelloMemoHOC"

const OptimizationApp = () => {
    return (
        <>
            <HelloMemo />
            <HelloMemoHOC />
            <HelloCallback />
        </>
    )
}

export default OptimizationApp