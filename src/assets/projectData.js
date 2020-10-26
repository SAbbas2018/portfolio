import React from "react";
const projectData = [
  {
    id: 1,
    name: "BookCase",
    live: "https://book-case-sa.herokuapp.com/",
    image: "/assets/bookcase.JPG",
    repo: "https://github.com/SAbbas2018/BookCase",
    desc:
      "This is a MERN stack application which uses the Google Books API for getting information on books by their ISBN, and to make recommendations.",
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
      "This is a React and Node.js application which get weather information for a user entered city through the openweathermap API and the top 10 news headlines from various categories from NEWS API.",
    tech: [
      <i className="devicon-express-original-wordmark tech-icon"></i>,
      <i className="devicon-react-original-wordmark tech-icon"></i>,
      <i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
    ],
  },
];

export { projectData };
