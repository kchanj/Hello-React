import FormDataObjectApp from "./FormDataObjectApp";
import FormDataSimpleApp from "./FormDataSimpleApp";
import PrevCounterApp from "./PrevCounterApp";
import SimpleCounterApp from "./SimpleCounterApp";
import TempConverterApp from "./TempConverterApp";
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
            <h2>TempConverterApp</h2>
            <TempConverterApp />
            <h2>FormDataSimpleApp</h2>
            <FormDataSimpleApp />
            <h2>FormDataObjectApp</h2>
            <FormDataObjectApp />
        </>
    )
}

export default StateApp;