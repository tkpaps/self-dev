import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    Box,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { Logo } from '../landingPage/Logo'
  import { GoogleIcon, GitHubIcon } from './ProviderIcons'
  
  export const SignUp = () => (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo textAlign="center" mr="8"/>
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
            <Text color="fg.muted">Accomplish your development goals</Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" />
              <FormHelperText color="fg.muted">At least 8 characters long</FormHelperText>
            </FormControl>
          </Stack>
         
          <Stack spacing="6">
            <Button>Create account</Button>
            <Button variant="secondary" leftIcon={<GoogleIcon />}>
              Sign up with Google
            </Button>
            <Button variant="secondary" leftIcon={<GitHubIcon />}>
              Sign up with GitHub
            </Button>
        <Text textStyle="sm" color="fg.muted" textAlign="center">
          Already have an account? <Link as={RouterLink} to="/login">
            Login
          </Link>
        </Text>
          </Stack>
        </Stack>
        </Box>
      </Stack>
    </Container>
  )