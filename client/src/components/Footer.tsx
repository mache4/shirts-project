import "../styles/footer.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <AiFillGithub onClick={() => window.open("https://github.com/mache4")} className="icon" />
                <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/branislav-rendulić-9b6411205/")} className="icon" />
            </div>
            <div className="info">
                <p>Branislav Rendulić 2022 <AiOutlineCopyrightCircle className="copyright" /></p>
            </div>
        </div>
    );
}

export default Footer;