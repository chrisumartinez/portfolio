import React from "react";
import { Projects } from "../data/resumeData";
import { Flex, Text, Link } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectCard = (cardInfo) => {
	return (
		<Flex
			justifyContent="space-around"
			alignItems="flex-start"
			outline="2px solid black"
			flexFlow="column wrap"
			w="50%"
			m={5}
			p={5}
		>
			<Link
				m={1}
				fontSize="2xl"
				fontStyle="bold"
				fontFamily="Open Sans"
				color=" #F87575"
				href={cardInfo.cardInfo.url}
				isExternal
			>
				{cardInfo.cardInfo.title} <ExternalLinkIcon mx="1px" />
			</Link>
			<Text fontSize="xl" fontFamily="Open Sans" fontStyle="italic">
				{cardInfo.cardInfo.date}
			</Text>
			{cardInfo.cardInfo.description.map((item, key) => {
				return (
					<Text
						key={key}
						fontSize="xl"
						fontFamily="Open Sans"
						textAlign="left"
					>
						{item}
					</Text>
				);
			})}
		</Flex>
	);
};

const ProjectSection = () => {
	return (
		<Flex
			justifyContent="center"
			flexFlow="column wrap"
			alignItems="center"
			m={5}
			w="100%"
		>
			{Projects.map((item, key) => {
				return <ProjectCard key={key} cardInfo={item} />;
			})}
		</Flex>
	);
};

export default ProjectSection;
