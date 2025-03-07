const booksReducer = (books, action) => {
    switch(action.type) {
        case 'SET_BOOKS':
            console.log(`[BookReducer] ${action.type}: books=${action.books ? action.books.length : 0}`);
            return action.books;

        case 'ADD_BOOK':
            console.log(`[BookReducer] ${action.type}: book=${action.book.id}`);
            return [...books, action.book];

        case 'DEL_BOOK':
            console.log(`[BookReducer] ${action.type}: book=${action.id}`);
            return books.filter(book => book.id !== action.id);

        case 'EDIT_BOOK':
            console.log(`[BookReducer] ${action.type}: book=${action.book.id}`);
            return books.map(book => book.id === action.book.id ? action.book : book);

        default:
            console.log(`[BookReducer] Default : books=${books ? books.length : 0}`);
            return books;
    }
}

export default booksReducer;