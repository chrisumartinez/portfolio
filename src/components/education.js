import { Education } from "../data/resumeData";
import React from "react";
import { Flex, Text, Spacer, Box } from "@chakra-ui/layout";
import { ImageHandler } from "../routes/resume.js";
import { Image } from "@chakra-ui/image";

const EducationCard = (props) => {
	const { studyType, institution, startDate, endDate, major } = props;

	return (
		<Flex
			maxW="640px"
			direction="column"
			rounded="lg"
			p={10}
			m={10}
			justifyContent="space-around"
			bg="#0B5351"
			color="#fafafa"
		>
			<Flex
				direction="column"
				m={10}
				textAlign="center"
				justifyContent="center"
			>
				<Text
					fontFamily="Open Sans"
					fontWeight="bold"
					fontStyle="italic"
					fontSize="3xl"
					textAlign="center"
					pb={4}
					as="u"
				>
					{studyType}
				</Text>

				<Text fontFamily="Open Sans" fontSize="3xl" textAlign="center">
					{startDate} - {endDate}
				</Text>
				<Text fontFamily="Open Sans" fontSize="3xl" textAlign="center">
					{major}
				</Text>
			</Flex>
		</Flex>
	);
};

const EducationSection = () => {
	return (
		<Flex
			textAlign={"center"}
			justifyContent={"center"}
			direction={"column"}
			width={"full"}
		>
			{Education.map((cardInfo, key) => {
				const image = ImageHandler(cardInfo.imageName);

				return (
					<Flex
						key={key}
						width="100%"
						mx="auto"
						justifyContent="space-evenly"
						alignItems="center"
						flexDirection="row"
					>
						<Spacer />
						<Box
							flex-direction="column"
							justifyContent="center"
							alignItems="center"
							width="35%"
							height="100%"
						>
							<Flex justifyContent="center" mb={3}>
								<Image
									object-fit="scaled-down"
									maxh="170px"
									src={image}
								/>
							</Flex>

							<Text
								fontFamily="Open Sans"
								fontSize="3xl"
								textAlign="center"
								color="black"
								bgColor="#EFEDE7"
								rounded="xl"
							>
								{cardInfo.location} {cardInfo.duration}
							</Text>
						</Box>
						<Spacer />

						<EducationCard {...cardInfo} key={cardInfo.id} />
					</Flex>
				);
			})}
		</Flex>
	);
};

export default EducationSection;
