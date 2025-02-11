import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './contexts/BooksContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
)
