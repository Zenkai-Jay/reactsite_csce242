import "../css/Footer.css";
const Footer = () => {
    return (
        <footer id="main-footer">
      <div className="footer-container">
        <h2>Jay's Food Wrld</h2>
        <p>Sharing simple, flavorful recipes for everyone.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/recipes">Recipes</a>
        </div>

        <p className="footer-copy">
          © 2026 Jay's Food Wrld
        </p>
      </div>
    </footer>
    );
}

export default Footer;
