import React from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { PricingCard } from './PricingCard'

export const PriceLayout = () => (
  <Box as="section" bg="bg.surgace">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }} align="center">
        <Stack spacing={{ base: '4', md: '6' }}>
          <Stack spacing="3" align="center">
            <Text textStyle={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
              Pricing
            </Text>
            <Heading textAlign="center" size={{ base: 'md', md: 'lg' }} fontWeight="semibold">
              Become Apart of the Community
            </Heading>
          </Stack>
          <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl" textAlign="center">
            Get access to 200+ components and free updates. Customize it to your needs, and make it
            yours today!
          </Text>
        </Stack>
        <PricingCard />
      </Stack>
    </Container>
  </Box>
)