import BookCardApp from "./BookCardApp";
import BookContentsApp from "./BookContentsApp";
import BookOpacityApp from "./BookOpacityApp";

const PropsPage = () => {
    return (
        <>
            <h2>BookCardApp</h2>
            <BookCardApp />
            <h2>BookContentsApp</h2>
            <BookContentsApp />
            <h2>BookOpacityApp</h2>
            <BookOpacityApp />
        </>
    )
}

export default PropsPage;