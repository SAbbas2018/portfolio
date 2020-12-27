import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Skills />
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-item-custom"
        activeClass="nav-item-custom"
      >
        <div id="top"></div>
      </Link>
    </div>
  );
}

export default App;
