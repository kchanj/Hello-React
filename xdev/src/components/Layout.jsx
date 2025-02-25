import { Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/props">Props</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/state">State</Link></li>
                <li><Link to="/reducer">Reducer</Link></li>
                <li><Link to="/ref">Ref</Link></li>
                <li><Link to="/effect">Effect</Link></li>
            </ul>
            {children}
        </div>
    )
}

export default Layout;