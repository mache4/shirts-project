import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signup } from "../actions/auth";

import "../styles/signup.scss";

const Signup = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmRef = useRef<any>();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useNavigate();

    const formSubmit = (e: any) => {
        e.preventDefault();
        setError("");

        // u koliko podaci nisu uneti i validate email i psw
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