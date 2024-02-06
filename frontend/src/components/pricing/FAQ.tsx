import React from 'react';
import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  export const FAQ = () => {

    return (
        <Container maxW="container.md" py={{ base: '8', md: '16' }}>
        <Box as="section" py={{ base: '16', md: '16' }}>
            <Container>
            <Stack spacing={{ base: '4', md: '6' }} align="center" textAlign="center">
                <Stack spacing="3">
                <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium" color="accent">
                    FAQ
                </Text>
                <Heading size={{ base: 'md', md: 'lg' }} fontWeight="semibold">
                    Got Questions? Love that!
                </Heading>
                </Stack>
                <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
                We got the answers
                </Text>
            </Stack>
            </Container>
        </Box>
        <Accordion bg="bg.surface" allowToggle>
        <AccordionItem >
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading size={{ base: 'xs', md: 'sm' }}>
                    Question 1
                </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading size={{ base: 'xs', md: 'sm' }}>
                    Question 2
                </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem >
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading size={{ base: 'xs', md: 'sm' }}>
                    Question 3
                </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        </Container>
    )
  }