import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe.js";
function Home() {
  return (
    <div className="home style3" id="home">
      <Header />
      <div className="home-info-container">
        <AboutMe />
        <div className="social-container">
          <a
            href="https://www.linkedin.com/in/syed-raza-abbas-788488186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/SAbbas2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
