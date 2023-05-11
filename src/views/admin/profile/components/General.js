// Chakra imports
import { SimpleGrid, Image, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        General Information
      </Text>

      <Image
        src="https://pbs.twimg.com/profile_images/1581660732/fcbompleto_400x400.png"
        alt="Horizon UI"
        width="25%"
      />
      <SimpleGrid columns="2" gap="5px">
        <Information boxShadow={cardShadow} title="Country" value="Uruguay" />
        <Information
          boxShadow={cardShadow}
          title="League"
          value="Primera Divion"
        />
        <Information
          boxShadow={cardShadow}
          title="Stadium"
          value="El Bolbético (40.000)"
        />
        <Information
          boxShadow={cardShadow}
          title="Fans Pressure"
          value="Amazing"
        />
        <Information boxShadow={cardShadow} title="Reputation" value="Bad" />
        <Information boxShadow={cardShadow} title="Academy" value="Great" />
        <Information boxShadow={cardShadow} title="Scouts" value="Good" />
        <Information boxShadow={cardShadow} title="Training" value="Good" />
      </SimpleGrid>
    </Card>
  );
}
