import { Flex, Box, Stack, Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Link, Image } from "@chakra-ui/react";
import Logo from "./images/code.svg";
import { Link as RouterLink } from "react-router-dom";

const Icon = (props) => {
	return (
		<Box boxSize="30px">
			<Image src={Logo} alt="Logo" />
		</Box>
	);
};

const MenuItemStack = () => {
	return (
		<Stack align="center" direction="row" color="#F87575">
			<RouterLink as={Link} to="/">
				Home
			</RouterLink>
			<RouterLink as={Link} to="/resume">
				Resume
			</RouterLink>
			<RouterLink as={Link} to="/contact">
				Contact
			</RouterLink>
		</Stack>
	);
};

const BrandStack = () => {
	return (
		<Stack spacing={6} align="center" direction="row" pd={4} m={5}>
			<Text fontSize="3xl" color="#F87575" fontFamily="Open Sans">
				Christian Martinez
			</Text>
		</Stack>
	);
};

const NavBar = () => {
	return (
		<Flex
			bg="#EFEDE7"
			flexFlow="column wrap"
			px={4}
			py={4}
			justifyContent="center"
			alignItems="center"
		>
			<BrandStack />

			<Spacer />
			<MenuItemStack />
		</Flex>
	);
};

export default NavBar;
