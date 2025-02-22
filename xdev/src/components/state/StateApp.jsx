import PrevCounterApp from "./PrevCounterApp copy";
import SimpleCounterApp from "./SimpleCounterApp";
import TodoListApp from "./TodoListApp";
import TogglePinnedApp from "./TogglePinnedApp";
import UserProfileApp from "./UserProfileApp";

const StateApp = () => {
    return (
        <>
            <h2>SimpleCounterApp</h2>
            <SimpleCounterApp />
            <h2>TogglePinnedApp</h2>
            <TogglePinnedApp />
            <h2>PrevCounterApp</h2>
            <PrevCounterApp />
            <h2>TodoListApp</h2>
            <TodoListApp />
            <h2>UserProfileApp</h2>
            <UserProfileApp />
        </>
    )
}

export default StateApp;