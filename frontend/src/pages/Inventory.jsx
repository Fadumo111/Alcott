import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Input, Text, Box, VStack } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Inventory() {
  return (
    <>
      <Box>
        <VStack>
          <HStack>
            <Text as="b">Search:</Text>
            <Input htmlSize={25} width="auto" />
          </HStack>
          <HStack>
            <Text as="b">Filter by category:</Text>
            <Input htmlSize={25} width="auto" />
          </HStack>
        </VStack>
      </Box>
      <Table  colorScheme='#D3D3D3' size='md'>
      <Tr>
        <Th>Name</Th>
        <Th >Category</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Threshhold</Th>
      </Tr>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          {/* Additional rows */}
        </Tbody>
      </Table>
    </>
  );
}

export default Inventory;
