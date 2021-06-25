import React from "react";
import { Center, Flex, Text } from "@chakra-ui/layout";
import { WindupChildren, Pause, Pace } from "windups";
import { Image } from "@chakra-ui/image";
import { Box, Divider } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import { Link } from "@chakra-ui/layout";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import Headshot from "../images/headshot.jpeg";

const AboutMe = () => {
	const Avatar = () => {
		return (
			<Center>
				<Image
					borderRadius="full"
					w="200px"
					h="188px"
					src={Headshot}
					alt="Christian Martinez"
				/>
			</Center>
		);
	};

	return (
		<>
			<Avatar />
			<Text
				fontFamily="Open Sans"
				color="#F87575"
				fontSize="6xl"
				fontWeight="bold"
				textAlign="center"
			>
				Christian Martinez
			</Text>
			<TypedPositions />
			<Divider />
			<SocialPlatform />
		</>
	);
};

// const SkeletonAvatar = () => {
// 	return (
// 		<>
// 			<Center>
// 				<SkeletonCircle m={10} size="190" textAlign="center" />
// 			</Center>
// 			<Skeleton
// 				startColor="#1BA098"
// 				endColor="#4357AD"
// 				height="5px"
// 				m={10}
// 			/>
// 			<Skeleton
// 				startColor="#4357AD"
// 				endColor="#F87575"
// 				height="5px"
// 				m={10}
// 			/>
// 			<Skeleton
// 				startColor="#F87575"
// 				endColor="#1BA098"
// 				height="5px"
// 				m={10}
// 			/>
// 		</>
// 	);
// };

const SocialPlatform = () => {
	return (
		<Center>
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
		</Center>
	);
};

const TypedPositions = () => {
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
				<Pace getPace={(char) => (char === "\n" ? 30 : 20)}>
					<span style={{ color: "#4357AD" }}>
						{"Full Stack Developer."}
					</span>
					<br />
					<Pause ms={450} />
					{"Student Development Specialist."}
					<br />
					<Pause ms={450} />
					<span style={{ color: "#1BA098" }}>
						{" Orgulloso Ingeniero Mexicano."}
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
			<Box
				justifyContent="center"
				alignItems="center"
				boxShadow="lg"
				bg="#efede7"
				padding={6}
			>
				<AboutMe />
			</Box>
		</Flex>
	);
};

export default Home;
