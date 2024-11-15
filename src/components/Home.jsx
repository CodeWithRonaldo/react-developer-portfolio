import React from "react";
import NavBar from "../components/NavBar";

import "../index.css";
import GitHubProfile from "./GitHubProfile";

const Home = () => {
  return (
    <>
      <div className="hero-text">
        <h1>
          Hi, I am <span>Abdulkudus</span>
        </h1>
        <h2>A Front End Engineer.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde
          omnis earum amet, <br />
          atque eligendi incidunt? Eligendi officia minima adipisci libero
          ipsum. Temporibus ducimus nam corporis dolorem sunt magnam
          repellendus?
        </p>
      </div>
      <div>
        <GitHubProfile />
      </div>
    </>
  );
};
export default Home;
