import express from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let books = [
  { id: '01', publishedDate: '1925-04-10', rating: 5, available: true, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
  { id: '02', publishedDate: '2011-01-01', rating: 4, available: true, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', genre: 'Non-fiction' },
  { id: '03', publishedDate: '1997-06-26', rating: 3, available: false, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
  { id: '04', publishedDate: '1960-07-11', rating: 5, available: true, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { id: '05', publishedDate: '1949-06-08', rating: 5, available: false, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { id: '06', publishedDate: '1951-07-16', rating: 4, available: true, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
  { id: '07', publishedDate: '1932-01-01', rating: 3, available: true, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
  { id: '08', publishedDate: '1937-09-21', rating: 5, available: false, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: '09', publishedDate: '0180-01-01', rating: 4, available: true, title: 'Meditations', author: 'Marcus Aurelius', genre: 'Philosophy' },
  { id: '10', publishedDate: '1813-01-28', rating: 5, available: true, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' }
];

/************************************************************
 * 목록
 ************************************************************/
app.get('/books', (req, res) => {
  const { genre, search } = req.query;
  let result = books;
  
  if(genre) {
    result = result.filter(book =>
      book.genre.toLowerCase() === genre.toLowerCase());
  }

  if(search) {
    const keyword = search.toLowerCase();
    result = result.filter(book =>
      book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)
    )
  }

  setTimeout(() => res.json(result), 500);
});

/************************************************************
 * 조회
 ************************************************************/
app.get('/books/:id', (req, res) => {
  const { id } = req.params;

  const book = books.find(book => book.id === id);
  if(!book) {
    return setTimeout(() => res.status(404).json({ error: 'Book not found' }), 500);
  }

  setTimeout(() => res.json(book), 500);
});

/************************************************************
 * 삭제
 ************************************************************/
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex(book => book.id === id);
  if(bookIndex === -1) {
    return setTimeout(() => res.status(404).json({ error: 'Book not found' }), 500);
  }

  books.splice(bookIndex, 1);
  setTimeout(() => res.status(204).send(), 500);
});

/************************************************************
 * 수정 (일괄)
 ************************************************************/
app.put('/books/:id', (req, res) => {
  const { id } = req.params;

  const idx = books.findIndex(book => book.id === id);
  if(idx === -1) {
    return setTimeout(() => res.status(404).json({ error: 'Book not found' }), 500);
  }

  const { publishedDate, rating, available, title, author, genre } = req.body;
  books[idx] = {...books[idx], publishedDate, rating, available, title, author, genre };

  setTimeout(() => res.json(books[idx]), 500);
});

/************************************************************
 * 수정 (부분)
 ************************************************************/
app.patch('/books/:id', (req, res) => {
  const { id } = req.params;

  const idx = books.findIndex(book => book.id === id);
  if(idx === -1) {
    return setTimeout(() => res.status(404).json({ error: 'Book not found' }), 500);
  }

  const updated = req.body;
  books[idx] = {...books[idx], ...updated };

  setTimeout(() => res.json(books[idx]), 500);
});

/************************************************************
 * 추가
 ************************************************************/
app.post('/books', (req, res) => {
  const { publishedDate, rating, available, title, author, genre } = req.body;

  const id = String(books.length + 1);

  const newBook = { id, publishedDate, rating, available, title, author, genre };
  books.push(newBook);

  setTimeout(() => res.status(201).json(newBook), 500);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});