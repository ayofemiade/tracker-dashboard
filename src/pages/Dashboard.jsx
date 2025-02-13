import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Divider,
  Progress,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon, SettingsIcon, BellIcon } from '@chakra-ui/icons';

 const Dashboard = () => {
  return (
    <Box bg="gray.800" color="white" minHeight="100vh">
      <Box p={5}>
        {/* Header Section */}
        <Flex justify="space-between" align="center" mb={5}>
          <Text fontSize="2xl" fontWeight="bold">
            Expense Tracker
          </Text>
          <Flex>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              mr={4}
            />
            <IconButton
              aria-label="Settings"
              icon={<SettingsIcon />}
              variant="ghost"
              mr={4}
            />
            <IconButton aria-label="Notifications" icon={<BellIcon />} />
          </Flex>
        </Flex>

        {/* Welcome Banner */}
        <VStack align="start" mb={5}>
          <Text fontSize="xl">Welcome back, Emma</Text>
          <Flex justify="space-between" w="full">
            <Box bg="blue.900" p={5} rounded="md" w="48%">
              <Text fontSize="lg" mb={2}>
                This month
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                $2,750
              </Text>
              <Text>Expenses</Text>
            </Box>
            <Box bg="green.900" p={5} rounded="md" w="48%">
              <Text fontSize="lg" mb={2}>
                Net income
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                $12,000
              </Text>
            </Box>
          </Flex>
        </VStack>

        {/* Activity Section */}
        <Box mb={5}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Activity
          </Text>
          <Text fontSize="md" mb={3}>
            Expenses by category
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            {['Marketing', 'Legal', 'Software', 'Travel', 'Other'].map(
              (category) => (
                <Box key={category}>
                  <Text>{category}</Text>
                  <Progress
                    value={Math.random() * 100}
                    colorScheme="teal"
                    size="sm"
                  />
                </Box>
              )
            )}
          </Grid>
        </Box>

        {/* Recent Transactions */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Recent transactions
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Category</Th>
                <Th>Amount</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                { date: 'Feb 12', category: 'Marketing', amount: 500, description: 'Facebook ads' },
                { date: 'Feb 12', category: 'Legal', amount: 200, description: 'Consultation' },
                { date: 'Feb 11', category: 'Software', amount: 100, description: 'Subscriptions' },
                { date: 'Feb 10', category: 'Travel', amount: 150, description: 'Hotel' },
                { date: 'Feb 9', category: 'Other', amount: 800, description: 'Office supplies' },
              ].map((transaction, idx) => (
                <Tr key={idx}>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.category}</Td>
                  <Td>${transaction.amount}</Td>
                  <Td>{transaction.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Divider my={5} />
        <Text fontSize="sm" textAlign="center" color="gray.500">
          2023 Expense Tracker
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;