// Chakra imports
import {
  Text,
  useColorModeValue,
  Grid,
  GridItem,
  Divider,
  List,
  ListItem,
  ListIcon,
  Tag,
  TagLabel,
  Button,
  Stack,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card.js";
import React from "react";

export default function Traits(props) {
  const { used, total } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box position="relative" padding="5">
        <Divider />
        <AbsoluteCenter px="2">General Info</AbsoluteCenter>
      </Box>
      <Grid templateColumns="repeat(6, 1fr)" gap={4} w="max-content" mx="auto">
        <GridItem
          colSpan={2}
          mx="auto"
          me="10px"
          align="center"
          direction="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            Status:
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Fit to play
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
            Value:
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            320.000 $
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
            Salary:
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            50.000 $
          </Text>
        </GridItem>
      </Grid>
      <Box position="relative" padding="5">
        <Divider />
        <AbsoluteCenter px="2">Stats</AbsoluteCenter>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} w="max-content" mx="auto">
        <GridItem colSpan={2} align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            Season:
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            23 PG (17 G)
          </Text>
        </GridItem>
        <GridItem colSpan={2} align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            Total:
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            144 PG (102 G)
          </Text>
        </GridItem>
      </Grid>
      <Box position="relative" padding="5">
        <Divider />
        <AbsoluteCenter px="2">Traits</AbsoluteCenter>
      </Box>
      <List spacing={3}>
        <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
          Special traits:
        </Text>
        <ListItem>
          <Tag
            size="lg"
            key="lg"
            borderRadius="full"
            variant="solid"
            colorScheme="orange"
          >
            <TagLabel>Tank</TagLabel>
          </Tag>
        </ListItem>
        <ListItem>
          <Tag
            size="lg"
            key="lg"
            borderRadius="full"
            variant="solid"
            colorScheme="purple"
          >
            <TagLabel>Demonized</TagLabel>
          </Tag>
        </ListItem>
        <ListItem>
          <Tag
            size="lg"
            key="lg"
            borderRadius="full"
            variant="solid"
            colorScheme="green"
          >
            <TagLabel>PowerShot</TagLabel>
          </Tag>
        </ListItem>
      </List>
      <Box position="relative" padding="5">
        <Divider />
        <AbsoluteCenter px="4">Action buttons</AbsoluteCenter>
      </Box>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" variant="outline" size="md">
          Sell
        </Button>
        <Button colorScheme="teal" variant="outline" size="md">
          Fire
        </Button>
      </Stack>
    </Card>
  );
}
