import { Flex, Text, Spacer } from "@chakra-ui/layout";
import { ImageHandler } from "../routes/resume.js";
import { Image } from "@chakra-ui/image";
import { Experiences } from "../data/resumeData.js";

const ExperienceCard = ({ item }) => {
	const description = item.description;

	const position = item.position;

	return (
		<Flex
			maxW="640px"
			direction="column"
			rounded="lg"
			p={10}
			m={10}
			justifyContent="space-around"
			bg="#efede7"
			border="2px solid"
			borderColor="black"
		>
			<Text
				fontFamily="Open Sans"
				fontWeight="bold"
				fontStyle="italic"
				fontSize="3xl"
				textAlign="center"
				as="u"
				color="#F87575"
			>
				{position}
			</Text>

			{description.map((item, index) => (
				<Text fontSize="xl" key={index} fontFamily="Open Sans" m={2}>
					{item}
				</Text>
			))}
		</Flex>
	);
};

const ExperienceItem = ({ item }) => {
	const image = ImageHandler(item.imageName);

	return (
		<Flex
			width="100%"
			mx="auto"
			justifyContent="space-evenly"
			alignItems="center"
			flexDirection="row"
		>
			<Spacer />
			<Flex
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Image object-fit="cover" src={image} />
				<Text textAlign="center" fontFamily="Open Sans" fontSize="3xl">
					{item.duration}
				</Text>
			</Flex>
			<Spacer />
			<ExperienceCard item={item} />
		</Flex>
	);
};

const ExperienceSection = () => {
	return (
		<Flex
			textAlign={"center"}
			justifyContent={"center"}
			direction={"column"}
			width={"full"}
		>
			{Experiences.map((item, key) => {
				return <ExperienceItem item={item} key={key} />;
			})}
		</Flex>
	);
};

export default ExperienceSection;
