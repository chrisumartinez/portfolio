import React from "react";
import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";

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
			href={process.env.PUBLIC_URL + "/chrisumartinez_resume.json"}
			target="_blank"
			download="chrisumartinez_resume.json"
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
			href={process.env.PUBLIC_URL + "/chrisumartinez_resume.pdf"}
			target="_blank"
		>
			PDF
		</Button>
	);
};
