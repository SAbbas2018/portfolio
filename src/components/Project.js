import React from "react";
import { Box, Image, Badge, Text, Link, Icon, Tooltip } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
function Project(props) {
	const { project } = props;
	const { name, live, image, repo, desc, tech } = project;
	return (
		<Box
			as="article"
			m="1rem"
			d="flex"
			flexDirection={["column", "column", "row", "row"]}
			justifyContent="space-evenly"
		>
			<Box
				variant="projectImage"
				overflow="hidden"
				backgroundImage={`url(${image})`}
				w={["350px", "400px", "450px", "600px"]}
				backgroundPosition="center"
				backgroundSize="contain"
				h={["182px", "208px", "234px", "312px"]}
				cursor="pointer"
				rounded="md"
				m="1rem"
				className="project-image"
			></Box>

			<Box
				w={["350px", "400px", "450px", "600px"]}
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
			>
				<Box p={[3, 3, 3, 5]}>
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						{name}
					</Box>

					<Box d="flex" mt="2" alignItems="center">
						<Text
							noOfLines={[3, 4, 5, 7]}
							fontSize={["sm", "md", "md", "xl"]}
						>
							{desc}
						</Text>
					</Box>
					<Box
						d="flex"
						alignItem="flex-end"
						justifyContent="space-evenly"
					>
						{tech.map((t, i) => (
							<Box
								fontSize={["2xl", "4xl", "6xl", "8xl"]}
								key={i}
							>
								{t}
							</Box>
						))}
					</Box>
					<Box
						d="flex"
						alignItem="flex-start"
						justifyContent="flex-end"
					>
						{live && (
							<Link href={live} isExternal>
								<Tooltip
									label="Visit Site"
									aria-label="visit-site-tooltip"
								>
									<Icon as={ExternalLinkIcon}></Icon>
								</Tooltip>
							</Link>
						)}
						{name !== "Carden" ? (
							<Tooltip
								label="GitHub Repo"
								aria-label="github-tooltip"
							>
								<Box ml="1rem">
									<Link href={repo} isExternal>
										<i className="fab fa-github fa-lg"></i>
									</Link>
								</Box>
							</Tooltip>
						) : null}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Project;
