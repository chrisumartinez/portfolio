import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Link } from "@chakra-ui/layout";
import JSONIcon from "../images/brackets.png";
import PDFIcon from "../images/pdf.png";
import ResumeJSON from "../data/resume.json";
import ResumePDF from "../data/resume.pdf";
import { Icon } from "@chakra-ui/icon";

import { FaFilePdf } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";

export const JSONResumeButton = () => {
	const image = <Icon as={BiCodeCurly} fill="#F87575" />;

	return (
		<Link
			href={ResumeJSON}
			w="10%"
			target="_blank"
			download="resume.json"
			color="#F87575"
		>
			<Button
				borderColor="#F87575"
				border="3px solid"
				size="lg"
				m={2}
				variant="outline"
				textAlign="center"
				leftIcon={image}
				justifyContent="center"
			>
				JSON
			</Button>
		</Link>
	);
};

export const PDFResumeButton = () => {
	const image = <Icon as={FaFilePdf} fill="#F87575" />;
	return (
		<Link
			href={ResumePDF}
			w="15%"
			target="_blank"
			download="resume.pdf"
			color="#F87575"
		>
			<Button
				borderColor="#F87575"
				border="3px solid"
				size="lg"
				m={2}
				variant="outline"
				textAlign="center"
				leftIcon={image}
				justifyContent="center"
			>
				PDF
			</Button>
		</Link>
	);
};
