import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, page, prepareRow, initialState } =
    tableInstance;
  initialState.pageSize = 8;

  const calculateColorAbility = (ability) => {
    if (ability >= 90) {
      return "#491d8b";
    } else if (ability >= 80) {
      return "#6929c4";
    } else if (ability >= 70) {
      return "#8a3ffc";
    } else if (ability >= 60) {
      return "#a56eff";
    } else if (ability >= 50) {
      return "#be95ff";
    } else if (ability >= 40) {
      return "#d4bbff";
    } else if (ability >= 30) {
      return "#e8daff";
    } else {
      return "#F56565";
    }
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="20px">
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "NAME") {
                    data = (
                      <Flex align="center">
                        <Text color={textColor} fontSize="md" fontWeight="700">
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "CURRENT") {
                    data = (
                      <Flex align="center">
                        <Badge background={calculateColorAbility(cell.value)}>
                          <Text
                            fontSize="md"
                            fontWeight="700"
                            style={{
                              color: cell.value >= 60 ? "white" : "black",
                            }}
                          >
                            {cell.value}
                          </Text>
                        </Badge>
                      </Flex>
                    );
                  } else if (cell.column.Header === "POTENTIAL") {
                    data = (
                      <Flex align="center">
                        <Badge background={calculateColorAbility(cell.value)}>
                          <Text
                            fontSize="md"
                            fontWeight="700"
                            style={{
                              color: cell.value >= 60 ? "white" : "black",
                            }}
                          >
                            {cell.value}
                          </Text>
                        </Badge>
                      </Flex>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
