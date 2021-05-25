import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { WindupChildren, Pause, Pace } from "windups";
import { Image } from "@chakra-ui/image";
import { Divider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Link } from "@chakra-ui/layout";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";

import Headshot from "../images/headshot.jpeg";

const SocialPlatform = () => {
	return (
		<Flex flexFlow="row wrap" m={5}>
			<Link
				href="https://www.linkedin.com/in/martinez-christian/"
				isExternal
			>
				<Icon as={IoLogoLinkedin} fill="#F87575" w={16} h={16} />
			</Link>
			<Link href="https://github.com/chrisumartinez">
				<Icon as={IoLogoGithub} fill="#F87575" w={16} h={16} />
			</Link>
			<Link href="mailto:chrisumartinez@gmail.com" isExternal>
				<Icon as={AiTwotoneMail} fill="#F87575" w={16} h={16} />
			</Link>
		</Flex>
	);
};

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
			<WindupChildren>
				<Pace getPace={(char) => (char === "\n" ? 100 : 30)}>
					<span style={{ color: "#4357AD" }}>
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
	return (
		<Flex
			display="flex"
			direction="column"
			alignItems="center"
			justify="center"
			m={10}
		>
			<Flex
				display="flex"
				direction="column"
				alignItems="center"
				justify="center"
				m={10}
			>
				<Image
					borderRadius="full"
					w="200px"
					h="188px"
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

				<TypedPositions />
				<Divider />
				<SocialPlatform />
			</Flex>
		</Flex>
	);
};

export default Home;
