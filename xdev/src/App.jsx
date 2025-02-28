import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import IndexPage from './components/IndexPage'
import PropsPage from './components/PropsPage'
import EventPage from './components/EventPage'
import StatePage from './components/StatePage'
import ReducerPage from './components/ReducerPage'
import RefPage from './components/RefPage'
import EffectPage from './components/EffectPage'
import CustomPage from './components/CustomPage'
import ContextPage from './components/ContextPage'
import OptimizationPage from './components/OptimizationPage'
import RerenderPage from './components/RerenderPage'
import RerenderAntiPage from './components/RerenderAntiPage'
import RoutingPage from './components/RoutingPage'
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
                    <Route path='/effect' element={<EffectPage />} />
                    <Route path='/custom' element={<CustomPage />} />
                    <Route path='/context' element={<ContextPage />} />
                    <Route path='/optimization' element={<OptimizationPage />} />
                    <Route path='/rerender' element={<RerenderPage />} />
                    <Route path='/rerender-anti' element={<RerenderAntiPage />} />
                    <Route path='/routing/:lang' element={<RoutingPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
