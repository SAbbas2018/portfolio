import React from "react";
import AboutMe from "./AboutMe.js";
function Home() {
  return (
    <div className="home" id="home">
      <div className="home-info-container">
        <h2 className="home-header">About Me</h2>
        <AboutMe />
        <div className="social-container">
          <a
            href="https://www.linkedin.com/in/syed-raza-abbas-788488186/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a
            href="https://github.com/SAbbas2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square fa-3x"></i>
          </a>
        </div>
      </div>
      <div className="home-pic">my pic here</div>
    </div>
  );
}

export default Home;
