import { Box, Text, Flex, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={[4, 5]} py={[6, 8]}>
      <Flex 
        justify="center" 
        direction="column" 
        align="center"
        maxW="container.xl"
        mx="auto"
      >
        <Text 
          fontSize={["sm", "md"]} 
          textAlign="center" 
          mb={[3, 4]}
        >
          2023 Expense Tracker
        </Text>
        
        <Stack
          direction={["column", "column", "row"]}
          spacing={[3, 4, 6]}
          align="center"
          wrap="wrap"
          justify="center"
        >
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            About us
          </Text>
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            Support
          </Text>
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            Pricing
          </Text>
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            Blog
          </Text>
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            Terms of service
          </Text>
          <Text 
            fontSize="sm" 
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            textAlign="center"
          >
            Privacy policy
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;