import React from "react";
import { Flex, Text, Spacer, Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { AboutMeBio } from "../data/resumeData.js";

const Bio = () => {
	return (
		<Center>
			<Flex
				direction="column"
				justifyContent="center"
				alignItems="center"
				w="50%"
			>
				<Box
					justifyContent="center"
					alignItems="center"
					boxShadow="lg"
					bg="#efede7"
					padding={6}
					m={5}
				>
					<Center>
						<Text fontSize="4xl" fontFamily="Open Sans">
							About Me
						</Text>
					</Center>

					<Spacer />
					<Center>
						<Text
							textAlign="center"
							fontFamily="Open Sans"
							fontSize="2xl"
						>
							{AboutMeBio[0].description}
							<br />
							<br />
							{AboutMeBio[0].hobbies}
						</Text>
					</Center>
				</Box>
			</Flex>
		</Center>
	);
};

const About = () => {
	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Bio />
		</Flex>
	);
};

export default About;
