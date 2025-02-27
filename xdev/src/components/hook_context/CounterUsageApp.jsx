import {CountProvider} from "./CountContext"
import CounterUsageMst from "./CounterUsageMst";

const CounterUsageApp = () => {
    return (
        <>
            <CountProvider>
                <CounterUsageMst />
            </CountProvider>
        </>
    )
}

export default CounterUsageApp;