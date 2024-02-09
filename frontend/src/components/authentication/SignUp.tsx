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
  Text,
  HStack,
  Container,
  Divider
} from '@chakra-ui/react'
import { GoogleIcon, GitHubIcon } from './ProviderIcons'
import { PasswordField } from './PasswordField'

export const SignUp = () => (
  <Box>
    <Stack spacing="6">
      <Stack spacing="3">
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <PasswordField/>
          <FormHelperText color="fg.muted">At least 8 characters long</FormHelperText>
        </FormControl>
      </Stack>
      <Stack spacing="6">
        <Button>Create account</Button>
        <Container maxW="lg" py={{ base: '2', md: '2' }}>
          <Stack spacing="8">
            <Stack spacing="6">
              <HStack>
                <Divider />
                <Text textStyle="sm" color="fg.muted">
                  OR
                </Text>
                <Divider />
              </HStack>
              <Stack spacing="3">
                <Button variant="secondary" leftIcon={<GoogleIcon />}>
                  Sign up with Google
                </Button>
                <Button variant="secondary" leftIcon={<GitHubIcon />}>
                  Sign up with GitHub
                </Button>
              </Stack>
            </Stack>
            <HStack spacing="1" justify="center">
              {/* <Text textStyle="sm" color="fg.muted">
          Having issues? <Link href="#">Contact us</Link>
        </Text> */}
            </HStack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  </Box>
)
