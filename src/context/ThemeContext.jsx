import { createContext, useContext, useEffect, useState } from "react";

const ThemeMode = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeMode.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeMode.Provider>
  );
};

export default ThemeContext;

export function useTheme() {
  return useContext(ThemeMode);
}
