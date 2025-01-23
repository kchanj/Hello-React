import { Component, useEffect, useState } from "react";

const CompLifecycle = () => {

    const comps = ['None', 'ClassComp', 'FuncComp'];
    const [current, setCurrent] = useState('None');

    return (
        <>
            {comps.map((comp) => (
                    <label key={comp}>
                        <input type="radio"
                               value={comp}
                               checked={current === comp}
                               onChange={(e) => setCurrent(e.target.value)} />
                        {comp}
                    </label>
                )
            )}
            <br/>
            {current === 'None'
                ? 'None'
                : (current === 'ClassComp'
                        ? <ClassComp/>
                        : <FuncComp/>) }
        </>
    )
}

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('1.ClassComp Mounted');
    }
    componentDidUpdate() {
        console.log('2.ClassComp Updated');
    }
    componentWillUnmount() {
        console.log('3.ClassComp Unmounted');
    }

    handleClick = () => {
        this.setState(prev => ({count: prev.count + 1}));
    }

    render() {
        console.log('---------- ClassComp Rendering ----------')
        return (
            <div>
                <h3>Class Component</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>++</button>
            </div>
        )
    }
}

const FuncComp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('1.FuncComp Mounted');
        return () => {
            console.log('3.FuncComp Unmounted');
        }
    }, []);

    useEffect(() => {
        console.log('2.FuncComp Mounted / Updated');
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    
    console.log('---------- FuncComp Rendering ----------');

    return (
        <div>
            <h3>Function Component</h3>
            <p>Count: {count}</p>
            <button onClick={handleClick}>++</button>
        </div>
    )
}

const CounterLifecycle = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick = (setter) => {
        setter(prev => prev + 1);
    }

    useEffect(() => {
        console.log(`count1: ${count1}, count2: ${count2}`)
    }, [count1]);

    return (
        <div>
            <h3>Count1: {count1}</h3>
            <button onClick={(e) => handleClick(setCount1)}>Count1 ++</button>

            <h3>Count2: {count2}</h3>
            <button onClick={(e) => handleClick(setCount2)}>Count2 ++</button>
        </div>
    )
}

const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const response = await fetch('/HelloLifecycleBook.json');
                const books = await response.json();
                setBooks(books);
            } catch(error) {
                console.error('Failed to fetch books:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong>
                        by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {
    CompLifecycle,
    CounterLifecycle,
    BookSearch
 }