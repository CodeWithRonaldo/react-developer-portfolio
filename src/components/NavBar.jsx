import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function NavBar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="nav-container">
      <div className="logo">
        <h1>Ronnie</h1>
      </div>
      <nav className="nav-items">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <button onClick={toggleTheme} className="theme-mode">
          {theme === "light" ? (
            <FaMoon className="moon" />
          ) : (
            <FaSun className="sun" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
