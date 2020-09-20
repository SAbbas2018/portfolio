import React from "react";
// import { projectData as pd } from "../assets/projectData";
// import Project from "./Project";
function Projects() {
  // const projects = [...pd];
  return (
    <section className="project-section">
      <header className="section-title">
        <h2 className="projects-title">Projects</h2>
      </header>
      <main className="projects-container" id="projects">
        <article className="project">
          <main className="project-info-main">
            <header className="project-name">BookCase</header>
            <p className="project-desc">
              The application features user registration/authentication and uses
              the Google Books API for getting information on books by their
              ISBN (user input), and to make recommendations based on the
              user-generated library and wishlist of books.
            </p>
            <p className="project-desc">
              Users can add books they already own to the library section, and
              books they would like to own in their wishlist section which has a
              link to GoogleBooks for the given book
            </p>
            <summary className="tech-icons">
              <i className="devicon-mongodb-plain-wordmark tech-icon"></i>
              <i className="devicon-express-original-wordmark tech-icon"></i>
              <i className="devicon-react-original-wordmark tech-icon"></i>
              <i className="devicon-nodejs-plain-wordmark tech-icon"></i>
            </summary>
          </main>
          <figure className="image-container">
            <img
              src="/assets/bookcase.JPG"
              alt="BookCase Home Page"
              className="img-main"
            ></img>
            <nav className="project-links">
              <div className="project-link">
                <a
                  href="https://github.com/SAbbas2018/BookCase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div className="project-link">
                <a
                  href="https://book-case-sa.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </a>
              </div>
            </nav>
          </figure>
        </article>
        <br className="project-break" />
        <article className="project">
          <main className="project-info-main">
            <header className="project-name">NewScript</header>
            <p className="project-desc">
              A web application which takes a user input city and displays the
              current weather information for the city, and the top 10 news
              headlines based on acategory chosen by the user using REST API’s.
            </p>
            <summary className="tech-icons">
              <i className="devicon-express-original-wordmark tech-icon"></i>
              <i className="devicon-react-original-wordmark tech-icon"></i>
              <i className="devicon-nodejs-plain-wordmark tech-icon"></i>
            </summary>
          </main>
          <figure className="image-container">
            <img
              src="/assets/newscript.JPG"
              alt="BookCase Home Page"
              className="img-main"
            ></img>
            <nav className="project-links">
              <div className="project-link">
                <a
                  href="https://github.com/SAbbas2018/newscript-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div className="project-link">
                <a
                  href="https://newscript-sa.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </a>
              </div>
            </nav>
          </figure>
        </article>
      </main>
    </section>
  );
}

export default Projects;
