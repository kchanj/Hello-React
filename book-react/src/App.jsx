import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import BookAdd from "./pages/BookAdd"
import BookEdit from "./pages/BookEdit"
import BookView from "./pages/BookView"
import Error from "./components/Error"
import Layout from "./components/Layout"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<BookAdd />} />
        <Route path="/edit/:id" element={<BookEdit />} />
        <Route path="/view/:id" element={<BookView />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
