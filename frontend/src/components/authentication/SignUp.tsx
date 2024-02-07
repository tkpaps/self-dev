import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { GoogleIcon, GitHubIcon } from './ProviderIcons'

export const SignUp = () => (
  <Box>
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
        {/* <Text textStyle="sm" color="fg.muted" textAlign="center">
          Already have an account? <Link as={RouterLink} to="/login">
            Login
          </Link>
        </Text> */}
      </Stack>
    </Stack>
  </Box>
)
