import React from "react";

export default function AboutMe() {
  return (
    <div>
      <h3 className="about-me-title">
        Hello, I am Raza, a Full Stack Web developer.{" "}
        <span role="img" aria-label="smiley face">
          &#128512;
        </span>
      </h3>
      <p className="about-me-text">
        I currently a fourth year student at the University of Toronto pursing a
        Honours Bachelor's of Science in Mathematics and Computer Science{" "}
        <span role="img" aria-label="laptop">
          &#128187;
        </span>
        . I am primarily interested in full stack web developement, but I also
        love learning more about algorithms, graph theory, combinatorics, and
        game development.
      </p>
      <p className="about-me-text">
        I am very interested in the fintech industry, keep up-to-date with
        financial news (primarily in Canada) and I am a long term investor with
        a vested interest in the tech industry.
      </p>
      <p className="about-me-text">
        I love sports and video games{" "}
        <span role="img" aria-label="game controller">
          &#127918;
        </span>
        , if I'm relaxing then I'm most likely playing on my switch. I am also
        an avid basketball and football fan. My favourite teams are the Miami
        Heat{" "}
        <span role="img" aria-label="basketball">
          &#127936;
        </span>{" "}
        and Borussia Dortmund{" "}
        <span role="img" aria-label="football">
          &#9917;
        </span>
        .
      </p>
    </div>
  );
}
