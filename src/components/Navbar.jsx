import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return(
  <nav className="navbar">
    <ul className="views">
      <li>
        <Link to="/">🏠 Home</Link>
      </li>
      <li>
        <Link to="/contacto">📒 Contacto</Link>
      </li>
    </ul>
    <Link to="/" className="navLogo">
      Happy Cake
      <img
        src="https://i.imgur.com/s7GAPJS.png"
        alt="HappyCake"
      />
    </Link>
  </nav>
  );
};

export default Navbar;
