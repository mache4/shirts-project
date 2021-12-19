import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import "../styles/navbar.scss";

const Navbar = () => {
    const history = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') || "{}"));

    useEffect(() => {
        const profile: any = localStorage.getItem('profile');
        setUser(JSON.parse(profile));
    }, [localStorage.getItem('profile')]);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken: any = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime())
                logout();
        }
    }, [location]);

    const logout = () => {
        localStorage.clear();

        history("/signin");
    }

    return (
        <div className="nav-bar">
            {/* <Overlay show={overlay} clicked={hideSidebar} />
            <Sidebar show={sidebar} clicked={hideSidebar} /> */}
            <div className="logo">
                <NavLink to={{
                    pathname: '/'
                }}>Šhïrts</NavLink>
            </div>

            <nav>
                <ul>
                    <li className="nav__item"><NavLink to={{
                        pathname: '/'
                    }}>Home</NavLink></li>

                    <li className="nav__item"><NavLink to={{
                        pathname: '/your-cart'
                    }}>Your Cart</NavLink></li>

                    <li className="nav__item"><NavLink to={{
                        pathname: '/your-orders'
                    }}>Your Orders</NavLink></li>

                    <li className="nav__item">{!localStorage.getItem("profile") ?
                        <NavLink to={{
                            pathname: '/signin'
                        }}><button className="login-btn">Signin</button></NavLink> :
                        <button className="logout-btn" onClick={logout}>Logout</button>}</li>
                    {!user?.result ? null : <li className="nav__item">{user.result.email}</li>}
                </ul>
            </nav>
            <i className="fas fa-bars" /*onClick={showSidebarHandler}*/></i>
        </div>
    );
}

export default Navbar;