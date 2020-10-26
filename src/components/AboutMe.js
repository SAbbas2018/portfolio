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
      <hr></hr>
      <p className="about-me-text">
        I am currently a fourth year student at the University of Toronto
        pursing a Honours Bachelor's of Science in Mathematics and Computer
        Science{" "}
        <span role="img" aria-label="laptop">
          &#128187;
        </span>
        . I am primarily interested in full stack web developement, but I also
        love learning more about algorithms, graph theory, combinatorics, and
        game development.
      </p>
    </div>
  );
}
