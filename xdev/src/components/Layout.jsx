import { Link, useNavigate } from "react-router-dom";

const Layout = ({children}) => {

    const navigate = useNavigate();

    const goMenu = (menu) => {
        let path = '/';
        switch(menu) {
            case 'rerender' :
                path = '/rerender';
                break;
            case 'rerender-anti' :
                path = '/rerender-anti';
                break;
            case 'routing' :
                path = '/routing/javascript?library=react&keyword=hooks';
                break;
            default :
                path = '/';
        }

        navigate(path);
    }

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/props">Props</Link>
                <Link to="/event">Event</Link>
                <Link to="/state">State</Link>
                <Link to="/reducer">Reducer</Link>
                <Link to="/ref">Ref</Link>
                <Link to="/effect">Effect</Link>
                <Link to="/custom">Custom</Link>
                <Link to="/context">Context</Link>
                <Link to="/optimization">Optimization</Link>
                <Link to="/rerender">Rerender</Link>
            </nav>
            <div>
                <button onClick={() => goMenu('rerender')}>Rerender</button>
                <button onClick={() => goMenu('rerender-anti')}>Rerender Anti</button>
                <button onClick={() => goMenu('routing')}>Routing</button>
            </div>
            {children}
        </div>
    )
}

export default Layout;