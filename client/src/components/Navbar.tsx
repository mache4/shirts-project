import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { LOGOUT } from "../constants/actionTypes";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.scss";

import Sidebar from "./Sidebar";
import Overlay from "./Overlay";

const Navbar = () => {
    const history = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') || "{}"));
    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const profile: any = localStorage.getItem('profile');
        setUser(JSON.parse(profile));
    }, [localStorage.getItem('profile')]);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken: any = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
                history("/signin");
            }
        }
    }, [location]);

    const logout = () => {
        localStorage.clear();
        dispatch({ type: LOGOUT });

        history("/signin");
    }

    const hideSidebar = () => setSidebar(false);
    const showSidebar = () => setSidebar(true);

    return (
        <div className="nav-bar">
            <Overlay show={sidebar} clicked={hideSidebar} />
            <Sidebar show={sidebar} clicked={hideSidebar} />
            <div className="logo">
                <Link to="/">Šhïrts</Link>
            </div>

            <nav>
                <ul>
                    <li className="nav__item"><Link to="/">Home</Link></li>
                    <li className="nav__item"><Link to="/your-cart">Your Cart</Link></li>
                    <li className="nav__item"><Link to="/your-orders">Your Orders</Link></li>

                    <li className="nav__item">
                        {!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}" ?
                            <Link to="/signin"><button className="signin-btn">Signin</button></Link> :
                            <button className="logout-btn" onClick={logout}>Logout</button>}
                    </li>
                </ul>
            </nav>
            <FaBars className="bars" onClick={showSidebar} />
        </div>
    );
}

export default Navbar;