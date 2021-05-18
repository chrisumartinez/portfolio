import { Flex, Box, Stack } from "@chakra-ui/layout";
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
		<Stack
			spacing={6}
			align="center"
			justify={["center", "space-between", "flex-end", "flex-end"]}
			direction={["column", "row", "row", "row"]}
			pt={[4, 4, 0, 0]}
		>
			<RouterLink to="/">
				<Link>Home</Link>
			</RouterLink>
			<RouterLink to="/github">
				<Link>Github</Link>
			</RouterLink>
			<RouterLink to="/linkedin">
				<Link>LinkedIn</Link>
			</RouterLink>
			<RouterLink to="/resume">
				<Link>Resume</Link>
			</RouterLink>
		</Stack>
	);
};

const BrandStack = () => {
	return (
		<Stack spacing={6} align="center" direction="row" pd={4}>
			<Icon />
			<Text>Christian Martinez</Text>
		</Stack>
	);
};

const NavBar = () => {
	return (
		<Flex
			bg="#333"
			w="100%"
			px={5}
			py={4}
			justifyContent="space-between"
			alignItems="center"
			fontFamily="Victor Mono"
			fontStyle="italic"
			fontWeight="700"
			color="white"
		>
			<MenuItemStack />
			<BrandStack />
		</Flex>
	);
};

export default NavBar;
