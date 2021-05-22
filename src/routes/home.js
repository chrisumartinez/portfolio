import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { WindupChildren, Pause, Pace } from "windups";
import { ScaleFade } from "@chakra-ui/react";

const TypedPositions = ({ onVisible }) => {
	return (
		<Text
			fontSize="6xl"
			bgClip="text"
			bgGradient="linear(to-r, red.500, yellow.500)"
			fontFamily="Victor Mono"
			fontStyle="italic"
			fontWeight="800"
			textAlign="center"
			maxW="1050px"
		>
			<WindupChildren onFinished={() => onVisible()}>
				<Pace getPace={(char) => (char === "\n" ? 100 : 30)}>
					{"Full Stack Developer."}
					<Pause ms={750} />
					{"Student Development Specialist."}
					<Pause ms={750} />
					{"Inginiero Mexicano Orgulloso."}
				</Pace>
			</WindupChildren>
		</Text>
	);
};

const AboutMeCard = () => {
	return (
		<Text
			fontFamily="Arial"
			fontWeight="800"
			fontSize="3xl"
			fontStyle="italic"
			color="black"
			bg="#F4D35E"
			p={4}
			mt={10}
			ml={20}
			mb={20}
			mr={20}
			rounded="lg"
			textAlign="center"
		>
			Hello everyone! My name is Christian Martinez. I was born and raised
			in sunny Santa Barbara, California, and graduated from California
			State University, Monterey Bay in Computer Science. You can find me
			coding, enjoying football or supporting my community. <br />
			<br />I am a software engineer, having worked as a full-stack
			developer for a start-up company, Parabug. I am currently working as
			a Student Development Specialist at Santa Barbara City College. I
			plan to continue advocating Science and Technology wherever I go.
		</Text>
	);
};

const Home = () => {
	const [isVisible, setIsVisible] = React.useState(false);

	const handleIsVisible = () => {
		setTimeout(() => {
			setIsVisible(true);
		}, 1500);
	};

	return (
		<Flex
			display="flex"
			direction="column"
			alignItems="center"
			justify="center"
		>
			<TypedPositions onVisible={handleIsVisible} />

			{isVisible && (
				<ScaleFade initalScale={5.4} in={isVisible}>
					<AboutMeCard />
				</ScaleFade>
			)}
		</Flex>
	);
};

export default Home;
