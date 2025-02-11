import { Route, Routes } from "react-router-dom"
import BookHome from "./pages/BookHome"
import BookView from "./pages/BookView"
import BookEdit from "./pages/BookEdit"
import BookAdd from "./pages/BookAdd"
import Error from "./components/Error"
import Layout from "./components/Layout"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BookHome />} />
        <Route path="/view/:id" element={<BookView />} />
        <Route path="/edit/:id" element={<BookEdit />} />
        <Route path="/add" element={<BookAdd />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
