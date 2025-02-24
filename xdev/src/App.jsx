import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import IndexPage from './components/IndexPage'
import PropsPage from './components/PropsPage'
import EventPage from './components/EventPage'
import StatePage from './components/StatePage'
import ReducerPage from './components/ReducerPage'
import RefPage from './components/RefPage'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/props' element={<PropsPage />} />
                    <Route path='/event' element={<EventPage />} />
                    <Route path='/state' element={<StatePage />} />
                    <Route path='/reducer' element={<ReducerPage />} />
                    <Route path='/ref' element={<RefPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
