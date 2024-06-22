import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your Dynamic Website</Heading>
        <Text fontSize="xl">This is a dynamic website template built with React and Chakra UI.</Text>
        <Box boxSize="sm">
          <Image src="/images/hero-image.png" alt="Hero Image" />
        </Box>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;