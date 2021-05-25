import React from "react";
import { Flex, Text } from "@chakra-ui/layout";

import Skills from "../components/skills.js";
import Education from "../components/education.js";
import Projects from "../components/projects.js";
import Experience from "../components/experience.js";

import { JSONResumeButton } from "../components/buttons";
import { PDFResumeButton } from "../components/buttons";

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

const Resume = () => {
	return (
		<Flex
			flexFlow="column wrap"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				alignItems="center"
				justifyContent={"center"}
				flexFlow="column wrap"
				w="full"
			>
				<Text
					fontFamily="Open Sans"
					fontSize="4xl"
					fontWeight="bold"
					textAlign="center"
					w="full"
				>
					Download in JSON or PDF format, or read below:
				</Text>
				<Flex
					w="full"
					dir="row"
					justifyContent="center"
					alignItems="center"
					mb={10}
				>
					<JSONResumeButton />
					<PDFResumeButton />
				</Flex>

				<Text
					fontFamily="Open Sans"
					fontSize="5xl"
					color="#F87575"
					fontWeight="bold"
				>
					Software Experience:
				</Text>
				<Experience />
				<Text
					fontFamily="Open Sans"
					fontSize="5xl"
					color="#F87575"
					fontWeight="bold"
				>
					Software Skills:
				</Text>
				<Skills />
				<Text
					fontFamily="Open Sans"
					fontSize="5xl"
					color="#F87575"
					fontWeight="bold"
				>
					Education:
				</Text>
				<Education />
				<Text
					fontFamily="Open Sans"
					fontSize="5xl"
					color="#F87575"
					fontWeight="bold"
				>
					Projects:
				</Text>
				<Projects />
			</Flex>
		</Flex>
	);
};

export default Resume;
