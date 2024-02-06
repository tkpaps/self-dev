import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    SimpleGrid,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  import { Logo } from '../landingPage/Logo'
  import { links } from './_data'
  
  export const Footer = () => (
    <Box bg="bg.surface">
      <Container as="footer" role="contentinfo">
        <Stack
          justify="space-between"
          align="start"
          direction={{ base: 'column', lg: 'row' }}
          py={{ base: '12', md: '16' }}
          spacing="8"
        >
          <Stack spacing={{ base: '6', md: '8' }} align="start">
            <Logo />
            <Text color="fg.muted">Accomplish your development goals</Text>
          </Stack>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
            {links.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
                <Text fontSize="sm" fontWeight="semibold" color="fg.subtle">
                  {group.title}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Button key={idx} as="a" variant="text" colorScheme="gray" href={link.href}>
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
        >
          <Text fontSize="sm" color="fg.subtle">
            &copy; {new Date().getFullYear()} AVT Capital LLC, All rights reserved.
          </Text>
          <ButtonGroup variant="tertiary">
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  )