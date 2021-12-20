import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../redux/actions/auth";

import "../styles/signup.scss";

const Signup = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmRef = useRef<any>();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();

    const validateEmail = (email: any) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex))
            return true;
        return false;
    }

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
            setError("Email is not valid");
        if (passwordRef?.current.value !== passwordConfirmRef?.current.value)
            return setError("Passwords don't match.");

        dispatch(signup({
            email: emailRef?.current.value,
            password: passwordRef?.current.value
        }, history));
    }

    return (
        <div className="signup">
            <h1>Signup</h1>
            {/* {console.log(error)} */}
            {error === "" ? null : <h1 className="error" style={{ color: 'red' }}>{error}.</h1>}
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