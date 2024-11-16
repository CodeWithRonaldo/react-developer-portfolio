import { NavLink } from "react-router-dom";
import logo from "../assets/preview1.png";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function NavBar() {
  const { toggleTheme, theme } = useTheme();


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
        <button onClick={toggleTheme}>{theme === "light" ? <FaMoon className="moon"/> : <FaSun className="sun" />}</button>
        {/* <p>Mode: {theme}</p> */}
      </nav>
    </div>
  );
}

export default NavBar;
