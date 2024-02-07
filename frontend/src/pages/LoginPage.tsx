import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { Logo } from '../components/landingPage/Logo'
import { Login } from '../components/authentication/Login'

export const LoginPage = () => (
  <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8" >
      <Stack spacing="6" align="center">
        <Logo textAlign="center" mr="8"/>
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <Text color="fg.muted">
              Don't have an account? <Link as={RouterLink} to="/signup">Sign up</Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Login/>
      </Box>
    </Stack>
  </Container>
)
