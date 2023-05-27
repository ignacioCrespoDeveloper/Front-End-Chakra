import {
  Box,
  Icon,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { MdAttachMoney, MdBarChart } from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import General from "views/admin/profile/components/General";
import { columnsDataComplex } from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import axios from "axios";

export default function UserReports() {
  const [clubData, setClubData] = React.useState(null); // Estado para almacenar los datos del club

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/club/1")
      .then(function (response) {
        // Almacenar los datos del club en el estado
        setClubData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Position"
          value="1st"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Balace"
          value="$642.943"
        />
        <MiniStatistics growth="+23%" name="Fans" value="17.919" />
      </SimpleGrid>

      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap="20px"
        mb="120px"
      >
        <GridItem rowSpan={1} colSpan={4}>
          <General />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <MiniCalendar colSpan={1} h="100%" minW="100%" selectRange={false} />{" "}
        </GridItem>
      </Grid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
