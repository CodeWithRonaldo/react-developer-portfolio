import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import GitHubProfile from "./components/GitHubProfile";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
          <GitHubProfile/>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
