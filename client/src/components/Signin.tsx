import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { REMOVE_ERRORS } from "../constants/actionTypes";

import "../styles/signin.scss";
import { signin } from "../redux/actions/auth";

const Signin = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");
    const errorData = useSelector((state: any) => state.authReducer.error);

    useEffect(() => {
        dispatch({ type: REMOVE_ERRORS });
    }, [location, dispatch]);

    useEffect(() => {
        if (errorData || errorData !== "")
            setError(errorData);
        else
            setError("");
    }, [errorData]);

    const formSubmit = (e: any) => {
        e.preventDefault();
        setError("");

        if (!emailRef.current.value && !passwordRef.current.value)
            return setError("Enter data");
        if (!emailRef.current.value)
            return setError("Enter email");
        if (!passwordRef.current.value)
            return setError("Enter password");
        if (errorData || errorData !== "")
            setError(errorData);

        dispatch(signin({
            email: emailRef?.current.value,
            password: passwordRef?.current.value
        }, history));
    }

    return (
        <div className="signin">
            <h1>Signin</h1>
            <h1 className="error" style={{ color: 'red', opacity: !error || error === "" ? 0 : 1 }}>{error}.</h1>
            <form onSubmit={formSubmit}>
                <input id="email" type="text" ref={emailRef} placeholder="Enter Your Email" />
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