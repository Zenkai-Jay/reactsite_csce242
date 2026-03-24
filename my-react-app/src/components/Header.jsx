import "../css/Header.css";
import WebsiteLogo from "../images/WebsiteLogo.png";

const Header = () => {
  return (
    <header id="main-header">
      <img src={WebsiteLogo} alt="Logo" />
      <nav id="main-nav">
        <ul>
           <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="">Contact</a></li>
          <li id="signUp"><a href="/">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
