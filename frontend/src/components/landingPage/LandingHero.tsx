import React from 'react';
import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    LightMode,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaPlay } from 'react-icons/fa'
  
  export const LandingHero = () => {

    return (
      <Box>
        <Box as="section" py="7.5rem">
          <Box maxW={{ base: 'xl', md: '5xl' }} mx="auto" px={{ base: '6', md: '8' }}>
            <Box textAlign="center">
              <Heading
                as="h1"
                size="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                mx="auto"
                lineHeight="1.2"
                letterSpacing="tight"
                color="currentColor"
              >
                Stand Out as a Profesional Developer
              </Heading>
              <Text fontSize="xl" mt="4" maxW="xl" mx="auto" color="currentColor">
                {'{self:dev}'} is the only place for customizable, community-driven personal and professional growth
              </Text>
            </Box>
  
            <Stack
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              mt="10"
              mb="20"
              spacing="4"
            >
                <Button size="lg" colorScheme="teal" px="8" fontWeight="bold" fontSize="md">
                  Get Started for Free
                </Button>
                <Button size="lg" colorScheme="teal" variant="outline" px="8" fontWeight="bold" fontSize="md">
                  Learn More
                </Button>
            </Stack>
          </Box>
        </Box>
        {/* <Box as="section" py="24">
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
            <Text
              fontWeight="bold"
              fontSize="sm"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="wide"
              color={mode('gray.600', 'gray.400')}
            >
              Trusted by over 6,000 blues
            </Text>
            <SimpleGrid
              mt="8"
              columns={{ base: 1, md: 2, lg: 6 }}
              color="gray.500"
              alignItems="center"
              justifyItems="center"
              spacing={{ base: '12', lg: '24' }}
              fontSize="2xl"
            >
            </SimpleGrid>
          </Box>
        </Box> */}
      </Box>
    )
  }