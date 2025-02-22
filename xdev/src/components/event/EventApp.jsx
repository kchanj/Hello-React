import EventButtonApp from "./EventButtonApp";
import NamedButtonApp from "./NamedButtonApp";
import SimpleButtonApp from "./SimpleButtonApp";
import SimpleTextBoxApp from "./SimpleTextBoxApp";

const EventApp = () => {
    return (
        <>
            <h2>SimpleButtonApp</h2>
            <SimpleButtonApp />
            <h2>NamedButtonApp</h2>
            <NamedButtonApp />
            <h2>EventButtonApp</h2>
            <EventButtonApp />
            <h2>SimpleTextBoxApp</h2>
            <SimpleTextBoxApp />
        </>
    )
}

export default EventApp;