import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { AiTwotoneMail } from "react-icons/ai";

import {
	FormControl,
	FormLabel,
	Textarea,
	FormHelperText,
	Input,
} from "@chakra-ui/react";

const Contact = () => {
	return (
		<Flex
			flexFlow="column wrap"
			justifyContent="center"
			alignItems="center"
		>
			<Text fontSize="6xl" color="#F87575" fontFamily="Open Sans">
				Contact
			</Text>
			<Text fontSize="xl" fontFamily="Open Sans">
				Looking to get in contact? I'd love to hear from you. You can
				find me at any of these platforms:
			</Text>
			<SocialPlatform />

			<Text mb={10} fontSize="xl" fontFamily="Open Sans">
				Or send me an email:
			</Text>
			<EmailForm />
		</Flex>
	);
};

export const SocialPlatform = () => {
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

const EmailForm = () => {
	const [isLoading, setIsLoading] = React.useState("false");

	return (
		<Flex
			w="65%"
			flexFlow="column wrap"
			justifyContent="center"
			outline="4px #F87575 solid"
			alignItems="center"
			m={10}
		>
			<FormControl id="email" isRequired>
				<FormLabel
					textAlign="center"
					fontFamily="Open Sans"
					color="#F87575"
					fontWeight="700"
				>
					Email Address
				</FormLabel>
				<Input
					placeholder="Email..."
					rounded="lg"
					textAlign="center"
					type="email"
					border="2px"
					borderColor="gray.300"
					fontFamily="Open Sans"
				/>
				<FormHelperText
					m={3}
					color="#F87575"
					fontWeight="700"
					fontFamily="Open Sans"
					textAlign="center"
				>
					I won't share your email. Promise!
				</FormHelperText>
			</FormControl>
			<FormControl id="name">
				<FormLabel
					fontFamily="Open Sans"
					color="#F87575"
					fontWeight="700"
					textAlign="center"
				>
					Name:
				</FormLabel>
				<Input
					textAlign="center"
					_placeholder={{ color: "gray" }}
					placeholder="Name..."
					type="text"
					fontFamily="Open Sans"
					border="2px"
					borderColor="gray.300"
				/>
			</FormControl>
			<FormControl id="message">
				<FormLabel
					color="#F87575"
					fontFamily="Open Sans"
					fontWeight="700"
					textAlign="center"
				>
					Message:
				</FormLabel>
				<Textarea
					size="lg"
					fontFamily="Open Sans"
					placeholder="Message..."
					border="2px"
					borderColor="gray.300"
				/>
			</FormControl>
			<Button
				borderColor="#F87575"
				border="3px solid"
				size="lg"
				m={2}
				variant="outline"
				textAlign="center"
				justifyContent="center"
				fontFamily="Open Sans"
				color="#F87575"
			>
				Submit
			</Button>
		</Flex>
	);
};

export default Contact;
