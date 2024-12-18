import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ThemeContext from "./context/ThemeContext";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <>
      <ThemeContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeContext>
    </>
  );
}

export default App;
