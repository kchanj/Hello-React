import { ToggleProvider } from "./ToggleContext";
import ToggleUsageMst from "./ToggleUsageMst";

const ToggleUsageApp = () => {
    return (
        <>
            <ToggleProvider>
                <ToggleUsageMst />
            </ToggleProvider>
        </>
    )
}

export default ToggleUsageApp;