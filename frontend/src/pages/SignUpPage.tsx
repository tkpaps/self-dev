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
import { SignUp } from '../components/authentication/SignUp'

export const SignUpPage = () => (
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
        <SignUp/>
        <Stack spacing="6" mt="6">
          <Text textStyle="sm" color="fg.muted" textAlign="center">
          Already have an account? <Link as={RouterLink} to="/login">
            Login
            </Link>
          </Text>
        </Stack>
      </Box>
    </Stack>
  </Container>
)
