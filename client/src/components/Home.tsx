import "../styles/animations.scss";
import "../styles/home.scss";
import Products from "./Products";
import LazyLoad from "react-lazyload";

import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt3 from "../assets/shirt3.jpg";

const Home = () => {
    return (
        <div className="home">
            <h1>We offer you the best quality</h1>
            <div className="slides">
                <img src={shirt1} alt="shirt--1" loading="lazy" className="slide__img" />
                <img src={shirt2} alt="shirt--2" loading="lazy" className="slide__img big" />
                <img src={shirt3} alt="shirt--3" loading="lazy" className="slide__img" />
            </div>
            {/* <LazyLoad once offset={10}> */}
            <Products />
            {/* </LazyLoad> */}
        </div>
    );
}

export default Home;