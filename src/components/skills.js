import React from "react";
import { Skills } from "../data/resumeData";
import { Flex, Text } from "@chakra-ui/layout";

const LanguageCard = () => {
	const languages = Skills[0].languages;

	return (
		<Flex
			dir="row"
			justifyContent="space-around"
			alignItems="center"
			fontSize="4xl"
			fontFamily="Open Sans"
			fontStyle="italic"
		>
			Languages : {"  "}
			{languages.map((language, key) => {
				return (
					<Text fontSize="3xl" key={key} fontFamily="Open Sans" m={2}>
						{language}
					</Text>
				);
			})}
		</Flex>
	);
};

const OtherCard = () => {
	const other = Skills[0].other;

	return (
		<Flex
			dir="row"
			justifyContent="space-around"
			alignItems="center"
			fontSize="4xl"
			fontFamily="Open Sans"
			fontStyle="italic"
		>
			Other:{"  "}
			{other.map((item, key) => {
				return (
					<Text fontSize="3xl" key={key} fontFamily="Open Sans" m={2}>
						{item}
					</Text>
				);
			})}
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
