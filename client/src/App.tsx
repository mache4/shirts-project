import Navbar from "./components/Navbar";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;