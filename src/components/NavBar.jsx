import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/preview1.png";

function NavBar() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav-items">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
    </div>
  );
}

export default NavBar;
