import "../css/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer id="main-footer">
      <div className="footer-container">
        <h2>Jay's Food Wrld</h2>
        <p>Sharing simple, flavorful recipes for everyone.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/recipes">Recipes</Link>
        </div>

        <p className="footer-copy">
          © 2026 Jay's Food Wrld
        </p>
      </div>
    </footer>
    );
}

export default Footer;
