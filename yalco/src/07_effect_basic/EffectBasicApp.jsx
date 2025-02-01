import { HelloLifecycle  } from "./components/HelloLifecycle"
import { CounterLifecycle  } from "./components/CounterLifecycle"
import { BookSearch  } from "./components/BookSearch"

const EffectBasicApp = () => {
    return (
        <>
            <HelloLifecycle />
            <CounterLifecycle />
            <BookSearch />
        </>
    )
}

export default EffectBasicApp