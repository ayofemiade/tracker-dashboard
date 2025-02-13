import { 
  Box, 
  Flex, 
  Text, 
  Button,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Invoices', href: '#' },
    { label: 'Settings', href: '#' }
  ];

  return (
    <Box bg="gray.800" color="white" position="relative">
      <Flex 
        px={[4, 5]} 
        py={4}
        justify="space-between" 
        align="center"
        maxW="container.xl"
        mx="auto"
      >
        <Text 
          fontSize={["xl", "2xl"]} 
          fontWeight="bold"
        >
          Expense Tracker
        </Text>

        {/* Desktop Navigation */}
        <Flex 
          display={["none", "none", "flex"]} 
          align="center"
          gap={6}
        >
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="link"
              color="white"
              _hover={{ color: "gray.300" }}
            >
              {item.label}
            </Button>
          ))}
        </Flex>

        {/* Mobile Menu Toggle */}
        <Button
          display={["block", "block", "none"]}
          variant="ghost"
          color="white"
          onClick={() => setIsOpen(!isOpen)}
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.700" }}
          size="sm"
        >
          {isOpen ? 'Close' : 'Menu'}
        </Button>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          display={["flex", "flex", "none"]}
          pos="absolute"
          top="100%"
          left={0}
          right={0}
          p={4}
          spacing={4}
          bg="gray.800"
          borderTop="1px"
          borderColor="gray.700"
          shadow="lg"
          zIndex={10}
        >
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              w="full"
              color="white"
              _hover={{ bg: "gray.700" }}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Header;