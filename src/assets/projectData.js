import React from "react";
const projectData = [
  {
    id: 1,
    name: "BookCase",
    live: "https://book-case-sa.herokuapp.com/",
    image: "/assets/bookcase.JPG",
    repo: "https://github.com/SAbbas2018/BookCase",
    desc:
      "This MERN stack application uses the Google Books API for getting information on books by their ISBN-13s, and makes recommendations to users.",
    tech: [
      <i className="devicon-mongodb-plain-wordmark tech-icon"></i>,
      <i className="devicon-express-original-wordmark tech-icon"></i>,
      <i className="devicon-react-original-wordmark tech-icon"></i>,
      <i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
    ],
  },
  {
    id: 2,
    name: "NewScript",
    live: "https://newscript-sa.herokuapp.com/",
    image: "/assets/newscript.JPG",
    repo: "https://github.com/SAbbas2018/newscript-react",
    desc:
      "This React and Node.js application obtainsweather information for a given city, and news headlines for common categories.",
    tech: [
      <i className="devicon-express-original-wordmark tech-icon"></i>,
      <i className="devicon-react-original-wordmark tech-icon"></i>,
      <i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
    ],
  },
];

export { projectData };
