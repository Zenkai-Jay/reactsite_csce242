import "../css/Header.css";
import WebsiteLogo from "../images/WebsiteLogo.png";
import {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <header id="main-header">
      <img src={WebsiteLogo} alt="Logo" />
      <nav id="main-nav">
        <a id="toggle-nav" onClick={toggleMenu} href="#">
          {menuOpen ? (<p>&#8963;</p>): (<p>&#8964;</p>)}
        </a>
        <ul className={menuOpen ? "" : "hide-small"}>
           <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="">Contact</Link></li>
          <li id="signUp"><Link to="/">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;