import React from "react";

export default function Skills() {
  return (
    <section className="skills-section wrapper" id="skills">
      <article className="skills-container web">
        <header className="container-title skills-header">Web Dev</header>
        <main className="skills-grid">
          <i className="devicon-react-original-wordmark  skill"></i>
          <i className="devicon-nodejs-plain-wordmark  skill"></i>
          <i className="devicon-express-original-wordmark skill"></i>
          <i className="devicon-javascript-plain  skill"></i>
          <i className="devicon-html5-plain-wordmark skill"></i>
          <i className="devicon-css3-plain-wordmark skill"></i>
        </main>
      </article>
      <article className="skills-container programming">
        <header className="container-title skills-header">
          Programming Languages
        </header>
        <main className="skills-grid">
          <i className="devicon-java-plain-wordmark skill"></i>
          <i className="devicon-python-plain-wordmark  skill"></i>
          {/* <i className="devicon-go-plain skill"></i> */}
        </main>
      </article>
      <article className="skills-container databases">
        <header className="container-title skills-header">Databases</header>
        <main className="skills-grid">
          <i className="devicon-mongodb-plain-wordmark  skill"></i>
          <i className="devicon-postgresql-plain-wordmark skill"></i>
          <i className="devicon-mysql-plain-wordmark skill"></i>
        </main>
      </article>
      <article className="skills-container tools">
        <header className="container-title skills-header">Tools</header>
        <main className="skills-grid">
          <i className="devicon-heroku-line-wordmark skill"></i>
          <i className="devicon-git-plain-wordmark skill"></i>
          <i className="devicon-github-original-wordmark  skill"></i>
          <i className="devicon-bootstrap-plain-wordmark skill"></i>
        </main>
      </article>
      {/* <footer className="skills-spacer spacer"></footer> */}
    </section>
  );
}
