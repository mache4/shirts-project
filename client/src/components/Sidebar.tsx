import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../constants/actionTypes";
import { ImCross } from "react-icons/im";

import "../styles/sidebar.scss";

interface Props {
    clicked: any,
    show: boolean
}

const Sidebar = (props: Props) => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        props.clicked();
    }

    return (
        <div className="sidebar" style={{
            transform: props.show ? 'translate(0)' : 'translate(100%)'
        }}>
            <ImCross className="cross" onClick={props.clicked} />
            <ul>
                <li className="nav__item"><Link onClick={props.clicked} to="/">Home</Link></li>
                <li className="nav__item"><Link onClick={props.clicked} to="/your-cart">Your Cart</Link></li>
                <li className="nav__item"><Link onClick={props.clicked} to="/your-orders">Your Orders</Link></li>

                <li className="nav__item">
                    {!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}" ?
                        <Link to="/signin" onClick={props.clicked}><button className="signin-btn">Signin</button></Link> :
                        <Link to="/signin" onClick={logout}><button className="logout-btn">Logout</button></Link>}
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;