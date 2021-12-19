import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/signin.scss";
import { signin } from "../actions/auth";

const Signin = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const dispatch = useDispatch();
    const history = useNavigate();
    const [error, setError] = useState("");

    const formSubmit = (e: any) => {
        // u koliko podaci nisu uneti
        e.preventDefault();
        setError("");

        dispatch(signin({
            email: emailRef?.current.value,
            password: passwordRef?.current.value
        }, history));
    }

    return (
        <div className="signin">
            <h1>Signin</h1>
            {error === "" ? null : <h1 className="error" style={{ color: 'red' }}>{error}.</h1>}
            <form onSubmit={formSubmit}>
                <input type="text" ref={emailRef} placeholder="Enter Your Email" />
                <input type="password" ref={passwordRef} placeholder="Enter Your Password" />
                <button type="submit">Signin</button>
            </form>
            <p>Don't have an account? Create one <NavLink to={{
                pathname: '/signup'
            }}>here</NavLink>.</p>
        </div>
    );
}

export default Signin;