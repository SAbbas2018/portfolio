import React, { Component } from "react";
import { Link } from "react-scroll";
import resume from "../assets/Resume.pdf";
class Header extends Component {
  render() {
    return (
      <div className="navbar-custom">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={20}
          duration={500}
          className="nav-item-custom"
          activeClass="nav-item-custom"
        >
          Home
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item-custom"
          activeClass="nav-item-custom"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item-custom"
          activeClass="nav-item-custom"
        >
          Skills
        </Link>
        <a
          className="nav-item-custom"
          href={resume}
          download="Syed Raza Abbas - Resume.pdf"
        >
          Resume
        </a>
      </div>
    );
  }
}

export default Header;
