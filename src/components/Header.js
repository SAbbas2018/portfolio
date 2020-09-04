import React, { Component } from "react";
import { Link } from "react-scroll";

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
        <a className="nav-item-custom" href="../assets/Resume.pdf" download>
          Resume
        </a>
        <a className="nav-item-custom" href="mailto:raza.35.abbas@gmail.com">
          Contact Me
        </a>
      </div>
    );
  }
}

export default Header;
