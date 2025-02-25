import HookChangeApp from "./HookChangeApp";
import ParentRerenderApp from "./ParentRerenderApp";
import StateChangeApp from "./StateChangeApp";

const RerenderApp = () => {
    return (
        <>
            <h2>StateChangeApp</h2>
            <StateChangeApp />
            <h2>ParentRerenderApp</h2>
            <ParentRerenderApp />
            <h2>HookChangeApp</h2>
            <HookChangeApp />

            https://www.developerway.com/posts/react-re-renders-guide
        </>
    )
}

export default RerenderApp;