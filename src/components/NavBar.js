import { Flex, Stack, Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MenuItemStack = ({ handleIsOpen }) => {
	return (
		<Stack align="center" direction="row" color="#F87575">
			<RouterLink as={Link} to="/" onClick={handleIsOpen}>
				Home
			</RouterLink>
			<RouterLink as={Link} to="/resume" onClick={handleIsOpen}>
				Resume
			</RouterLink>
		</Stack>
	);
};

const BrandStack = () => {
	return (
		<Stack spacing={6} align="center" direction="row" pd={4} m={5}>
			<RouterLink as={Link} to="/">
				<Text fontSize="3xl" color="#F87575" fontFamily="Open Sans">
					Christian Martinez
				</Text>
			</RouterLink>
		</Stack>
	);
};

const NavBar = ({ handleIsOpen }) => {
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
			<MenuItemStack handleIsOpen={handleIsOpen} />
		</Flex>
	);
};

export default NavBar;
