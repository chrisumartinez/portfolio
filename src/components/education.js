import { Education } from "../data/resumeData";
import React from "react";
import { Flex, Text, Spacer } from "@chakra-ui/layout";
import { ImageHandler } from "../routes/resume.js";
import { Image } from "@chakra-ui/image";

const EducationCard = (props) => {
	const { studyType, startDate, endDate, major } = props;

	return (
		<Flex direction="column" rounded="lg" justifyContent="center">
			<Flex direction="column" textAlign="center" justifyContent="center">
				<Text
					fontFamily="Open Sans"
					fontWeight="bold"
					fontStyle="italic"
					fontSize="3xl"
					textAlign="center"
					pb={4}
					as="u"
					color="#F87575"
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
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						mb={5}
						mt={5}
					>
						<Flex
							mx="auto"
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
						>
							<Spacer />

							<Image object-fit="scaled-down" src={image} />

							<Text
								fontFamily="Open Sans"
								fontSize="3xl"
								textAlign="center"
								color="black"
								bgColor="#EFEDE7"
								rounded="xl"
							>
								{cardInfo.duration}
							</Text>
							<Spacer />

							<EducationCard {...cardInfo} key={cardInfo.id} />
						</Flex>
					</Flex>
				);
			})}
		</Flex>
	);
};

export default EducationSection;
