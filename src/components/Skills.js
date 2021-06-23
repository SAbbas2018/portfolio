import React from "react";
import BG from "../assets/bg.png";
import { Box, Heading, Center, Image } from "@chakra-ui/react";
export default function Skills() {
	return (
		<>
			<Box p={5} color="palette.platinum" backgroundColor="teal" w="100%">
				<Heading>Skills</Heading>
			</Box>
			<Box
				as="section"
				id="skills"
				// backgroundColor="palette.darkSlateBlue"
				backgroundImage={`url(${BG})`}
				d="grid"
				gridTemplateColumns="1fr"
				placeItems="center"
				gridGap={5}
				p={3}
				color="palette.bunting"
			>
				<Box
					as="article"
					w={["90%", "70%", "75%", "80%"]}
					boxShadow="dark-lg"
					background="palette.platinum"
					p={3}
					m="10px auto"
				>
					<Center>
						<Heading
							w="90%"
							borderBottom="1px solid black"
							p={3}
							textAlign="center"
						>
							Web
						</Heading>
					</Center>
					<Box
						w="100%"
						d="grid"
						gridTemplateColumns={[
							"repeat(3, 1fr)",
							"repeat(4, 1fr)",
							"repeat(4, 1fr)",
							"repeat(4, 1fr)",
						]}
						mt={5}
						mb={5}
						placeItems="center"
						gridGap={3}
						fontSize={["6xl", "7xl", "8xl", "9xl"]}
					>
						<i className="devicon-react-original-wordmark colored"></i>
						<i className="devicon-nodejs-plain-wordmark colored"></i>
						<i className="devicon-express-original-wordmark colored"></i>
						<i className="devicon-javascript-plain colored"></i>
						<i className="devicon-html5-plain-wordmark colored"></i>
						<i className="devicon-css3-plain-wordmark colored"></i>
						<i className="devicon-php-plain colored"></i>
					</Box>
				</Box>

				<Box
					as="article"
					w={["90%", "70%", "75%", "80%"]}
					boxShadow="dark-lg"
					background="palette.platinum"
					p={3}
					m="10px auto"
				>
					<Center>
						<Heading
							w="90%"
							borderBottom="1px solid black"
							p={3}
							textAlign="center"
						>
							Programming Languages
						</Heading>
					</Center>
					<Box
						w="100%"
						d="grid"
						gridTemplateColumns={[
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
						]}
						mt={5}
						mb={5}
						placeItems="center"
						gridGap={3}
						fontSize={["6xl", "7xl", "8xl", "9xl"]}
					>
						<i className="devicon-java-plain-wordmark colored"></i>
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
							width={["50px", "60px", "70px", "80px"]}
						></Image>
						<i className="devicon-typescript-plain colored"></i>
						{/* <i className="devicon-go-plain skill"></i> */}
					</Box>
				</Box>

				<Box
					as="article"
					w={["90%", "70%", "75%", "80%"]}
					boxShadow="dark-lg"
					background="palette.platinum"
					p={3}
					m="10px auto"
				>
					<Center>
						<Heading
							w="90%"
							borderBottom="1px solid black"
							p={3}
							textAlign="center"
						>
							Databases
						</Heading>
					</Center>
					<Box
						w="100%"
						d="grid"
						gridTemplateColumns={[
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
						]}
						mt={5}
						mb={5}
						placeItems="center"
						gridGap={3}
						fontSize={["6xl", "7xl", "8xl", "9xl"]}
					>
						<i className="devicon-mongodb-plain-wordmark  colored"></i>
						<i className="devicon-postgresql-plain-wordmark colored"></i>
						<i className="devicon-mysql-plain-wordmark colored"></i>
					</Box>
				</Box>

				<Box
					as="article"
					w={["90%", "70%", "75%", "80%"]}
					boxShadow="dark-lg"
					background="palette.platinum"
					p={3}
					m="10px auto"
				>
					<Center>
						<Heading
							w="90%"
							borderBottom="1px solid black"
							p={3}
							textAlign="center"
						>
							Tools
						</Heading>
					</Center>
					<Box
						w="100%"
						d="grid"
						gridTemplateColumns={[
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
							"repeat(3, 1fr)",
						]}
						mt={5}
						mb={5}
						placeItems="center"
						gridGap={3}
						fontSize={["6xl", "7xl", "8xl", "9xl"]}
					>
						<i className="devicon-heroku-line-wordmark colored"></i>
						<i className="devicon-git-plain-wordmark colored"></i>
						<i className="devicon-github-original-wordmark  colored"></i>
						{/* <i className="devicon-bootstrap-plain-wordmark skill"></i> */}
					</Box>
				</Box>
			</Box>
		</>
	);
}
