import { Routes, Route, Link, useLocation, useParams } from "react-router-dom"
import styles from '../../Card.module.css'
import { useEffect } from "react"

const HelloLocation = () => {
    return (
        <>
            <h2>Location 기본: Location 정보 접근하기</h2>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/user/kim'}>User1</Link>
                <Link to={'/user/lee'}>User2</Link>
                <Link to={'/search?keyword=react&category=lang'}>Search1</Link>
                <Link to={'/search?keyword=vuejs&category=lang'}>Search2</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/:id' element={<User />} />
                <Route path='/search' element={<Search />} />
                <Route path='*' element={<div className={styles.card}><h3>404 - Page Not Found</h3></div>} />
            </Routes>
        </>
    )
}

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(`[Home] location:`, location);
        console.log(`[Home] pathname:`, location.pathname);
    }, [location]);

    return (
        <div className={styles.card}>
            <h3>Home</h3>
        </div>
    )
}

const User = () => {

    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        console.log(`[User] location:`, location);
        console.log(`[User] pathname:`, location.pathname);
        console.log(`[User] params:`, params);
    }, [location, params.id]);

    return (
        <div className={styles.card}>
            <h3>User</h3>
            <p>id : {params.id}</p>
        </div>
    )
}

const Search = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get('keyword');

    useEffect(() => {
        console.log(`[Search] location:`, location);
        console.log(`[Search] pathname:`, location.pathname);
        console.log(`[Search] search:`, location.search);
        for (const [key, value] of query) {
            console.log(`[Search] query: ${key} = ${value}`);
        }
    }, [location, keyword]);

    return (
        <div className={styles.card}>
            <h3>Search</h3>
            <p>keyword : {keyword}</p>
        </div>
    )
}

export { HelloLocation }