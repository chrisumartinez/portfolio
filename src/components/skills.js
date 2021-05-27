import React from "react";
import { Skills } from "../data/resumeData";
import { Flex, Text } from "@chakra-ui/layout";

const LanguageCard = () => {
	const languages = Skills[0].languages;

	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			fontSize="4xl"
			fontFamily="Open Sans"
			fontStyle="italic"
		>
			<Text fontSize="4xl" fontFamily="Open Sans" fontStyle="italic">
				Languages:
			</Text>
			<Flex
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				fontSize="4xl"
				fontFamily="Open Sans"
				fontStyle="italic"
			>
				{languages.map((language, key) => {
					return (
						<Text
							fontSize="3xl"
							key={key}
							fontFamily="Open Sans"
							m={2}
						>
							{language}
						</Text>
					);
				})}
			</Flex>
		</Flex>
	);
};

const OtherCard = () => {
	const other = Skills[0].other;

	return (
		<Flex
			flexDirection="column"
			justifyContent="space-around"
			alignItems="center"
			fontSize="4xl"
			fontFamily="Open Sans"
			fontStyle="italic"
		>
			<Text fontSize="4xl" fontFamily="Open Sans" fontStyle="italic">
				Other:
			</Text>
			<Flex
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				fontSize="4xl"
				fontFamily="Open Sans"
				fontStyle="italic"
			>
				{other.map((item, key) => {
					return (
						<Text
							fontSize="3xl"
							key={key}
							fontFamily="Open Sans"
							m={2}
						>
							{item}
						</Text>
					);
				})}
			</Flex>
		</Flex>
	);
};

const SkillSection = () => {
	return (
		<Flex
			flexDirection="column"
			justifyContent="space-around"
			alignItems="center"
		>
			<LanguageCard />
			<OtherCard />
		</Flex>
	);
};

export default SkillSection;
