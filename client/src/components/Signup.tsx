import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { REMOVE_ERRORS } from "../constants/actionTypes";

import { signup } from "../redux/actions/auth";

import "../styles/signup.scss";

const Signup = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmRef = useRef<any>();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const errorData = useSelector((state: any) => state.authReducer.error);

    const validateEmail = (email: any) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex))
            return true;
        return false;
    }

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
        if (!passwordConfirmRef.current.value)
            return setError("Confirm password");
        if (!validateEmail(emailRef.current.value))
            return setError("Email is not valid");
        if (passwordRef.current.value.length < 8)
            return setError("Password must have at least 8 characters");
        if (passwordRef?.current.value !== passwordConfirmRef?.current.value)
            return setError("Passwords don't match");
        if (errorData || errorData !== "")
            setError(errorData);

        dispatch(signup({
            email: emailRef?.current.value.trim(),
            password: passwordRef?.current.value,
            createdAt: new Date()
        }, history));
    }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <h1 className="error" style={{ color: 'red', opacity: !error || error === "" ? 0 : 1 }}>{error}.</h1>
            <form onSubmit={formSubmit}>
                <input type="text"
                    id="email"
                    ref={emailRef}
                    placeholder="Enter Your Email" />

                <input type="password"
                    id="passowrd"
                    ref={passwordRef}
                    placeholder="Enter Your Password" />

                <input type="password"
                    id="passowrd-confirmed"
                    ref={passwordConfirmRef}
                    placeholder="Confirm Your Password" />

                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? Click <NavLink to={{
                pathname: '/signin'
            }}>here</NavLink>.</p>
        </div>
    );
}

export default Signup;