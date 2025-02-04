import { HelloLifecycle  } from "./components/HelloLifecycle"
import { BookSearch  } from "./components/BookSearch"
import { HelloTimer } from "./components/HelloTimer"

const EffectBasicApp = () => {
    return (
        <>
            <HelloLifecycle />
            <BookSearch />
            <HelloTimer />
        </>
    )
}

export default EffectBasicApp