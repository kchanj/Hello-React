import { CountProvider } from "../hook_context/CountContext";
import ContextChangeMst from "./ContextChangeMst";

const ContextChangeApp = () => {

    console.log(`[ContextChangeApp] render`);

    return (
        <CountProvider>
            <ContextChangeMst />
        </CountProvider>
    )
}

export default ContextChangeApp;