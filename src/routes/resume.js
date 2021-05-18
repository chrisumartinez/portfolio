import React from "react";
import { Flex, Text, Box, Spacer } from "@chakra-ui/layout";
import { Education, Skills, Experiences, Projects } from "../data/resumeData";
import { useColorModeValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import imageSBCC from "../images/sbcc.jpeg";
import imageParabug from "../images/parabug.png";
import imageCSUMB from "../images/csumb.png";
import imageCodePath from "../images/codepath.jpeg";

const ImageHandler = (imageName) => {
	console.log(imageName);

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
	const { position, location, duration, company, description } = props;

	return (
		<Flex
			boxShadow="lg"
			maxW="640px"
			direction="column"
			rounded="xl"
			p={10}
			m={10}
			justifyContent="space-around"
			position="relative"
			bg={useColorModeValue("white", "gray.800")}
		>
			<Flex direction="column" textAlign="center" justifyContent="center">
				<Text
					fontFamily="Victor Mono"
					fontWeight="bold"
					fontStyle="italic"
					fontSize="3xl"
					textAlign="center"
					pb={4}
					as="u"
				>
					{position}
				</Text>

				<Text
					fontFamily="Victor Mono"
					fontStyle="lg"
					textAlign="center"
				>
					{description.map((item) => (
						<Text fontSize="xl" fontWeight="700" m={2}>
							{item}
						</Text>
					))}
				</Text>
			</Flex>
		</Flex>
	);
};

const SkillsCard = () => {};

const Resume = () => {
	return (
		<Flex
			textAlign={"center"}
			pt={10}
			justifyContent={"center"}
			direction={"column"}
			width={"full"}
			outline="5px solid red"
		>
			<Text
				fontFamily="Victor Mono"
				fontSize="6xl"
				color="#F4D35E"
				fontWeight="bold"
			>
				Experience
			</Text>

			{Experiences.map((cardInfo) => {
				console.log(cardInfo);
				console.log(cardInfo.imageName);
				const image = ImageHandler(cardInfo.imageName);

				return (
					<Flex
						width="100%"
						mx="auto"
						justifyContent="space-evenly"
						alignItems="center"
						flexDirection="row"
						outline="5px blue solid"
					>
						<Spacer />
						<Box
							flex-direction="column"
							justifyContent="center"
							alignItems="center"
							outline="5px green solid"
							height="100%"
						>
							<Flex
								justifyContent="center"
								outline="5px yellow solid"
								mb={3}
							>
								<Image object-fit="scaled-down" src={image} />
							</Flex>

							<Text
								fontFamily="Victor Mono"
								fontSize="3xl"
								textAlign="center"
								color="black"
								bgColor="white"
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
		</Flex>
	);
};

export default Resume;
