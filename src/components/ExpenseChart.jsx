import { Box, Flex, Text, Progress, Button, Table, HStack } from "@chakra-ui/react"

const ExpenseChart = () => {
  const transactions = [
    { date: 'Feb 12', category: 'Marketing', amount: '$500', description: 'Facebook ads' },
    { date: 'Feb 12', category: 'Legal', amount: '$200', description: 'Consultation' },
    { date: 'Feb 11', category: 'Software', amount: '$100', description: 'Subscriptions' },
    { date: 'Feb 10', category: 'Travel', amount: '$150', description: 'Hotel' },
    { date: 'Feb 9', category: 'Other', amount: '$800', description: 'Office supplies' }
  ];

  return (
    <Box bg="gray.800" minHeight="100vh" color="white" p={[6, 6, 6, 10]}>
      <Flex
        justify="space-between"
        mb={6}
        direction={["column", "row"]}
        gap={[4, 0]}
      >
        <Text fontSize={["md", "lg"]}>Welcome back, Emma</Text>
      </Flex>

      <Flex
        justify="space-between"
        mb={6}
        direction={["column", "row"]}
        gap={4}
      >
        <Box
          bg="gray.700"
          p={[5, 4]}
          rounded="md"
          width={["100%", "100%", "45%"]}
          transition="all 0.2s"
          _hover={{ bg: "gray.600" }}
        >
          <Text fontSize="sm" color="gray.300">This month</Text>
          <Text
            fontSize={["2xl", "xl"]}
            fontWeight="bold"
            my={[2, 1]}
          >
            $2,750
          </Text>
          <Text fontSize="sm" color="gray.300">Expenses</Text>
        </Box>

        <Box
          bg="gray.700"
          p={[5, 4]}
          rounded="md"
          width={["100%", "100%", "45%"]}
          transition="all 0.2s"
          _hover={{ bg: "gray.600" }}
        >
          <Text fontSize="sm" color="gray.300">This month</Text>
          <Text
            fontSize={["2xl", "xl"]}
            fontWeight="bold"
            my={[2, 1]}
          >
            $12,000
          </Text>
          <Text fontSize="sm" color="gray.300">Net income</Text>
        </Box>
      </Flex>

      <Box mb={[4, 6]}>
        <Text fontSize={["md", "lg"]} mb={[1, 2]}>Activity</Text>
        <Text fontSize={["sm", "md"]} mb={[2, 4]}>Expenses by category</Text>
        <Flex direction="column" gap={[2, 4]} align="center">
          <Progress.Root defaultValue={50} maxW={["100%", "90%"]} width="100%" size={["md", "lg"]}>
            <HStack gap={[3, 5]}>
              <Progress.Label>Marketing</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>50%</Progress.ValueText>
            </HStack>
          </Progress.Root>

          <Progress.Root defaultValue={20} maxW={["100%", "90%"]} width="100%" size={["md", "lg"]}>
            <HStack gap={[3, 5]}>
              <Progress.Label>Legal</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>20%</Progress.ValueText>
            </HStack>
          </Progress.Root>

          <Progress.Root defaultValue={30} maxW={["100%", "90%"]} width="100%" size={["md", "lg"]}>
            <HStack gap={[3, 5]}>
              <Progress.Label>Software</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>30%</Progress.ValueText>
            </HStack>
          </Progress.Root>

          <Progress.Root defaultValue={70} maxW={["100%", "90%"]} width="100%" size={["md", "lg"]}>
            <HStack gap={[3, 5]}>
              <Progress.Label>Travel</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>70%</Progress.ValueText>
            </HStack>
          </Progress.Root>

          <Progress.Root defaultValue={40} maxW={["100%", "90%"]} width="100%" size={["md", "lg"]}>
            <HStack gap={[3, 5]}>
              <Progress.Label>Other</Progress.Label>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>40%</Progress.ValueText>
            </HStack>
          </Progress.Root>
        </Flex>
      </Box>

      <Box mb={6}>
        <Text fontSize="lg" mb={2}>Recent transactions</Text>

        {/* Desktop View */}
        <Box display={["none", "none", "block"]}>
          <Table.Root size="lg" interactive bg="black" color="white" borderRadius="md">
            <Table.Header bg="gray.900">
              <Table.Row>
                <Table.ColumnHeader bg="gray.900" color="white">Date</Table.ColumnHeader>
                <Table.ColumnHeader bg="gray.900" color="white">Category</Table.ColumnHeader>
                <Table.ColumnHeader bg="gray.900" color="white">Amount</Table.ColumnHeader>
                <Table.ColumnHeader bg="gray.900" color="white">Description</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {transactions.map((tx, index) => (
                <Table.Row key={index} bg="gray.800" _hover={{ bg: "gray.700" }}>
                  <Table.Cell color="white">{tx.date}</Table.Cell>
                  <Table.Cell color="white">{tx.category}</Table.Cell>
                  <Table.Cell color="white">{tx.amount}</Table.Cell>
                  <Table.Cell color="white">{tx.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer bg="gray.900">
              <Table.Row>
                <Table.Cell bg="gray.900" colSpan={4}>
                  <Button colorScheme="teal" width="full">View all transactions</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table.Root>
        </Box>

        {/* Mobile View */}
        <Box display={["block", "block", "none"]}>
          <Flex direction="column" gap={4}>
            {transactions.map((tx, index) => (
              <Box
                key={index}
                bg="gray.800"
                p={4}
                borderRadius="md"
                _hover={{ bg: "gray.700" }}
              >
                <Flex justify="space-between" mb={2}>
                  <Text color="gray.400" fontSize="sm">{tx.date}</Text>
                  <Text color="white" fontWeight="bold">{tx.amount}</Text>
                </Flex>
                <Text color="white" mb={1}>{tx.category}</Text>
                <Text color="gray.300" fontSize="sm">{tx.description}</Text>
              </Box>
            ))}
            <Button colorScheme="teal" width="full">View all transactions</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default ExpenseChart;