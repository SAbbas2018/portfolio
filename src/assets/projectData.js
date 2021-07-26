import React from "react";
const projectData = [
	{
		id: 1,
		name: "BookCase",
		live: "https://bookcase-v2-typescript.herokuapp.com/login",
		image: "/assets/project_images/bookcase-500x260.jpg",
		repo: "https://github.com/SAbbas2018/bookcase-typescript",
		desc: "The application uses the Google Books API for getting information on books by their ISBN (user input), and makes recommendations based on the user’s library.",
		tech: [
			<i className="devicon-mongodb-plain-wordmark tech-icon"></i>,
			<i className="devicon-express-original-wordmark tech-icon"></i>,
			<i className="devicon-react-original-wordmark tech-icon"></i>,
			<i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
		],
	},
	{
		id: 2,
		name: "Carden",
		image: "/assets/project_images/carden-500x260.jpg",
		repo: "#",
		desc: "Create and send interactive cards. Instead of sending your friend a text for their next birthday, send them a webpage. Choose from templates or make your own!",
		tech: [
			<i className="devicon-express-original-wordmark tech-icon"></i>,
			<i className="devicon-react-original-wordmark tech-icon"></i>,
			<i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
			<i className="devicon-mongodb-plain-wordmark tech-icon"></i>,
		],
	},
	{
		id: 3,
		name: "TicTacToe",
		live: "https://tictactoe-sa.herokuapp.com/",
		image: "/assets/project_images/tictactoe-500x260.jpg",
		repo: "https://github.com/SAbbas2018/tictactoe",
		desc: "An OOP Tic Tac Toe game users can play against another user on the same window, a computer with 3 levels of difficulty, or agains a friend in real time through web sockets.",
		tech: [
			<i className="devicon-express-original-wordmark tech-icon"></i>,
			<i className="devicon-react-original-wordmark tech-icon"></i>,
			<i className="devicon-nodejs-plain-wordmark tech-icon"></i>,
		],
	},
];

export { projectData };
