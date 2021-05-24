import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { WindupChildren, Pause, Pace } from "windups";
import { ScaleFade } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { SocialPlatform } from "./contact.js";
import { Divider } from "@chakra-ui/react";

import Headshot from "../images/headshot.jpeg";

const TypedPositions = ({ onVisible }) => {
	return (
		<Text
			fontSize="3xl"
			fontFamily="Open Sans"
			fontStyle="italic"
			color="#F87575"
			fontWeight="800"
			textAlign="center"
			maxW="1050px"
		>
			<WindupChildren onFinished={() => onVisible()}>
				<Pace getPace={(char) => (char === "\n" ? 100 : 30)}>
					<span style={{ color: "#08415C" }}>
						{"Full Stack Developer."}
					</span>
					<br />
					<Pause ms={550} />
					{"Student Development Specialist."}
					<br />
					<Pause ms={550} />
					<span style={{ color: "#1BA098" }}>
						{"Ingeniero Mexicano Orgulloso."}{" "}
					</span>
				</Pace>
			</WindupChildren>
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
			m={10}
		>
			<Image
				borderRadius="full"
				boxSize="150px"
				src={Headshot}
				alt="Christian Martinez"
			/>
			<Text
				fontFamily="Open Sans"
				color="#F87575"
				fontSize="4xl"
				fontWeight="bold"
			>
				Christian Martinez
			</Text>

			<TypedPositions onVisible={handleIsVisible} />
			<Divider />
			<SocialPlatform />

			{isVisible && (
				<ScaleFade initalScale={5.4} in={isVisible}></ScaleFade>
			)}
		</Flex>
	);
};

export default Home;
