import "./App.css";
import React from "react";
import NavBar from "./NavBar.js";

import { Flex, Text } from "@chakra-ui/layout";
import { useWindupString, WindupChildren, Pause, Pace } from "windups";
import { ScaleFade, useDisclosure } from "@chakra-ui/react";

const TypedTitle = () => {
	const [AboutMeBioText] = useWindupString(
		"Hello everyone! My name is Christian Martinez, currently Student Development Specialist at Santa Barbara City College. I was born and raised in sunny Santa Barbara, California, and graduated from California State University, Monterey Bay in Computer Science. You can find me coding, enjoying football or supporting my community. I am an also software engineer, having worked as a full-stack developer for a start-up company, Parabug.\n\n I like Jen"
	);
	return <>{AboutMeBioText}</>;
};

const TypedPositions = ({ onVisible }) => {
	// const [Name] = useWindupString("Christian Martinez", {
	// 	pace: (char) => (char === " " ? 600 : 100),
	// });

	const titles = [
		"Full-Stack Developer",
		"Student Development Specialist",
		"CSUMB Alumni",
		"Proud LatinX Coder",
	];

	return (
		<Text
			fontSize="6xl"
			bgClip="text"
			bgGradient="linear(to-r, red.500, yellow.500)"
			fontFamily="Victor Mono"
			fontStyle="italic"
			fontWeight="800"
			textAlign="center"
		>
			<WindupChildren onFinished={() => onVisible()}>
				<Pace getPace={(char) => (char === "\n" ? 100 : 30)}>
					<p>{"Full Stack Developer."}</p>
					<Pause ms={750} />
					<p>{"Student Development Specialist."}</p>
					<Pause ms={750} />
					<p>{"Enginiero Mexicano Orgulloso."}</p>
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

const App = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const { isOpen, onToggle } = useDisclosure();

	const handleIsVisible = () => {
		setTimeout(() => {
			setIsVisible(true);
		}, 1500);
	};

	return (
		<div>
			<NavBar />
			<Flex
				display="flex"
				direction="column"
				height="100vh"
				alignItems="center"
				justify="center"
			>
				<TypedPositions onVisible={handleIsVisible} />

				{isVisible && (
					<ScaleFade initalScale={5.4} in={isVisible}>
						{/* <Button
							onClick={onToggle}
							bgGradient="linear(to-r, red.500, yellow.500)"
							color="white"
							size="lg"
						>
							<Text>About Me</Text>
						</Button>
						<ScaleFade initalScale={0.7} in={isOpen}>
							<AboutMeCard />
						</ScaleFade> */}
						<AboutMeCard />
					</ScaleFade>
				)}
			</Flex>
		</div>
	);
};
export default App;
