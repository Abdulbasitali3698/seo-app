import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./components/header";

export default function Home() {
  return (
    <Box>
      <Header/>
      <Heading>This is Home Page</Heading> 
    </Box>
  );
}
