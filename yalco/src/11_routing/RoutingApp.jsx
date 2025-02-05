import { BrowserRouter } from "react-router-dom"
import { HelloRoute } from "./components/HelloRoute"
import { HelloLocation } from "./components/HelloLocation"

const ContextApp = () => {
    return (
        <>
            <BrowserRouter>
                <HelloRoute />
                <HelloLocation />
            </BrowserRouter>
        </>
    )
}

export default ContextApp