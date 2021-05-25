import React from "react";
import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";

import ResumeJSON from "../data/resume.json";
import ResumePDF from "../data/resume.pdf";
import { Icon } from "@chakra-ui/icon";

import { FaFilePdf } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";

export const JSONResumeButton = () => {
	const image = <Icon as={BiCodeCurly} fill="#F87575" />;

	return (
		<Button
			borderColor="black"
			border="3px solid"
			size="lg"
			m={2}
			variant="outline"
			textAlign="center"
			leftIcon={image}
			justifyContent="center"
			as={Link}
			href={ResumeJSON}
			target="_blank"
			download="resume.json"
		>
			JSON
		</Button>
	);
};

export const PDFResumeButton = () => {
	const image = <Icon as={FaFilePdf} fill="#F87575" />;
	return (
		<Button
			borderColor="black"
			border="3px solid"
			size="lg"
			m={2}
			variant="outline"
			textAlign="center"
			leftIcon={image}
			as={Link}
			justifyContent="center"
			href={ResumePDF}
			target="_blank"
		>
			PDF
		</Button>
	);
};
