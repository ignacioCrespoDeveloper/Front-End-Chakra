// Chakra imports
import {
  Avatar,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import Flag from "../../../../assets/img/countryFlags/libera.png";

export default function Banner(props) {
  const {
    banner,
    avatar,
    name,
    position,
    age,
    height,
    weight,
    preferredFoot,
    country,
  } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Avatar
        mx="auto"
        src={avatar}
        h="150px"
        w="150px"
        mt="40px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {position}
      </Text>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={4}
        w="max-content"
        mx="auto"
        mt="20px"
      >
        <GridItem
          colSpan={2}
          mx="auto"
          me="40px"
          align="center"
          direction="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {age}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            years old
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          mx="auto"
          me="40px"
          align="center"
          direction="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {height}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            height
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          mx="auto"
          me="40px"
          align="center"
          direction="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {weight}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            weight
          </Text>
        </GridItem>
        <GridItem colSpan={3} me="40px" align="center" direction="column">
          <Avatar mx="auto" src={Flag} h="40px" w="40px" />
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            country
          </Text>
        </GridItem>
        <GridItem colSpan={3} me="40px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {preferredFoot}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            foot
          </Text>
        </GridItem>
      </Grid>
    </Card>
  );
}
