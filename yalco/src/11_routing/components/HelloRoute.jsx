import { Routes, Route, Link, useNavigate } from "react-router-dom"
import styles from '../../Card.module.css'

const HelloRoute = () => {
    return (
        <>
            <h2>Route 기본: 경로에 해당하는 컴포넌트 렌더링</h2>
            <Menu type={'link'} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<div className={styles.card}><h3>404 - Page Not Found</h3></div>} />
            </Routes>
        </>
    )
}

const Menu = ({type}) => {
    
    const navigate = useNavigate();
    const go = (path) => navigate(path);

    return (
        <>
            <p>Menu Type : {type}</p>
            { type === 'href' ? (
                <nav>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </nav>
            ) : type === 'link' ? (
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </nav>
            ) : (
                <nav>
                    <button onClick={() => go('/')}>Home</button>
                    <button onClick={() => go('/about')}>About</button>
                    <button onClick={() => go('/contact')}>Contact</button>
                </nav>
            ) }
        </>
    )
}

const Home = () => (
  <div className={styles.card}>
    <h3>Home</h3>
    <p>
      Welcome to Web Dev Class!
    </p>
  </div>
)

const About = () => (
  <div className={styles.card}>
    <h3>About</h3>
    <ul>
      {['HTML', 'CSS', 'JavaScript'].map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
)

const Contact = () => (
  <div className={styles.card}>
    <h3>Contact</h3>
    <address>
      email: 
      <a href="mailto:yalco@yalco.kr">
        yalco@yalco.kr
      </a>
    </address>
  </div>
)

export { HelloRoute }