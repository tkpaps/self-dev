import React from 'react';
import { Flex, Grid, Box, Button, HStack, Heading, Icon, List, ListItem, Stack, Text, useColorMode } from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

export const PricingCard = () => {

  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'teal.500',
    dark: 'teal.200', 
  };

  const features = [
    'Exclusive Single User License',
    'Access to All Pro Components',
    'Limitless Project Implementation',
    'Regular Free Updates',
    '24/7 Dedicated Customer Support',
  ]
  return (
    <Grid
  templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
  gap={{ base: '8', md: '12' }}
>
    <Box
      bg="bg.surface"
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="sm"
      px={{ base: '6', md: '8' }}
      py="2"
      width="full"
      maxW="lg"
    >
      <Stack spacing={{ base: '10', md: '10' }} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Free
          </Text>
          <Flex direction="row" align="baseline">
            <Heading size={{ base: 'md', md: 'lg' }}>$0 </Heading>
            <Text color="fg.muted"> /month</Text>
          </Flex>
          <Text color="fg.muted">Perfect for just testing the waters</Text>
        </Stack>
        <Button variant="outline" size="xl">Get Started</Button>
        <List spacing="4">
          {features.map((feature) => (
            <ListItem key={feature} color="fg.muted">
              <HStack spacing="4">
                <Icon as={FiCheck} color="accent" boxSize="6" />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
    <Box
      bg="bg.surface"
      borderWidth="4px"
      borderRadius="2xl"
      borderColor={borderColor[colorMode]}
      boxShadow="sm"
      px={{ base: '6', md: '8' }}
      py="8"
      width="full"
      maxW="lg"
    >
      <Stack spacing={{ base: '10', md: '10' }} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Growth
          </Text>
          <Flex direction="row" align="baseline">
            <Heading size={{ base: 'md', md: 'lg' }}>$19</Heading>
            <Text color="fg.muted"> /month</Text>
          </Flex>
          <Text color="fg.muted">When you start to get serious</Text>
        </Stack>
        <Button size="xl">Get Started</Button>
        <List spacing="4">
          {features.map((feature) => (
            <ListItem key={feature} color="fg.muted">
              <HStack spacing="4">
                <Icon as={FiCheck} color="accent" boxSize="6" />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
    <Box
      bg="bg.surface"
      borderWidth="1px"
      borderRadius="2xl"
      boxShadow="sm"
      px={{ base: '6', md: '8' }}
      py="8"
      width="full"
      maxW="lg"
    >
      <Stack spacing={{ base: '10', md: '10' }} textAlign="center">
        <Stack align="center">
          <Text textStyle={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Pro
          </Text>
          <Flex direction="row" align="baseline">
            <Heading size={{ base: 'md', md: 'lg' }}>$49</Heading>
            <Text color="fg.muted"> /month</Text>
          </Flex>
          <Text color="fg.muted">Become unrecognizable...</Text>
        </Stack>
        <Button variant="outline" size="xl">Get Started</Button>
        <List spacing="4">
          {features.map((feature) => (
            <ListItem key={feature} color="fg.muted">
              <HStack spacing="4">
                <Icon as={FiCheck} color="accent" boxSize="6" />
                <Text>{feature}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
    </Grid>
  )
}