import React from "react";
import { Flex, Text, Box, Spacer } from "@chakra-ui/layout";
import { Experiences } from "../data/resumeData";
import { Image } from "@chakra-ui/image";

import Skills from "../components/skills.js";
import Education from "../components/education.js";
import Projects from "../components/projects.js";

import imageSBCC from "../images/sbcc.png";
import imageParabug from "../images/parabug.png";
import imageCSUMB from "../images/csumb.png";
import imageCodePath from "../images/codepath.png";

export const ImageHandler = (imageName) => {
	switch (imageName) {
		case "sbcc":
			return imageSBCC;
		case "parabug":
			return imageParabug;
		case "csumb":
			return imageCSUMB;
		case "codepath":
			return imageCodePath;
		default:
			throw Error();
	}
};

const ExperienceCard = (props) => {
	const { position, description } = props;

	return (
		<Flex
			box-shadow=" rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;"
			maxW="640px"
			direction="column"
			rounded="lg"
			p={10}
			m={10}
			justifyContent="space-around"
			bg="#0B5351"
			color="#fafafa"
		>
			<Flex direction="column" textAlign="center" justifyContent="center">
				<Text
					fontFamily="Open Sans"
					fontWeight="bold"
					fontStyle="italic"
					fontSize="3xl"
					textAlign="center"
					pb={4}
					as="u"
				>
					{position}
				</Text>

				<Flex
					direction="column"
					fontFamily="Open Sans"
					fontStyle="lg"
					textAlign="center"
				>
					{description.map((item, key) => (
						<Text fontSize="xl" key={key} fontWeight="700" m={2}>
							{item}
						</Text>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

const Resume = () => {
	return (
		<Flex
			textAlign={"center"}
			pt={10}
			justifyContent={"center"}
			direction={"column"}
			width={"full"}
		>
			<Text
				fontFamily="Open Sans"
				fontSize="6xl"
				color="#3B3561"
				fontWeight="bold"
			>
				Software Experience
			</Text>

			{Experiences.map((cardInfo, key) => {
				const image = ImageHandler(cardInfo.imageName);

				return (
					<Flex
						key={key}
						width="100%"
						mx="auto"
						justifyContent="space-evenly"
						alignItems="center"
						flexDirection="row"
					>
						<Spacer />
						<Box
							flex-direction="column"
							justifyContent="center"
							alignItems="center"
							width="35%"
							height="100%"
						>
							<Flex justifyContent="center" mb={3}>
								<Image object-fit="scaled-down" src={image} />
							</Flex>

							<Text
								fontFamily="Open Sans"
								fontSize="3xl"
								textAlign="center"
								color="black"
								bgColor="#fafafa"
								rounded="xl"
							>
								{cardInfo.location} {cardInfo.duration}
							</Text>
						</Box>
						<Spacer />

						<ExperienceCard {...cardInfo} key={cardInfo.id} />
					</Flex>
				);
			})}
			<Text
				fontFamily="Open Sans"
				fontSize="6xl"
				color="#3B3561"
				fontWeight="bold"
			>
				Software Skills
			</Text>
			<Skills />
			<Text
				fontFamily="Open Sans"
				fontSize="6xl"
				color="#3B3561"
				fontWeight="bold"
			>
				Education
			</Text>
			<Education />
			<Text
				fontFamily="Open Sans"
				fontSize="6xl"
				color="#3B3561"
				fontWeight="bold"
			>
				Projects
			</Text>
			<Projects />
		</Flex>
	);
};

export default Resume;
