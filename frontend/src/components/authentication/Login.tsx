import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Container,
  Divider,
  Link
} from '@chakra-ui/react'
import { PasswordField } from './PasswordField'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

export const Login = () => (
  <Box>
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <PasswordField />
      </Stack>
      <HStack justify="space-between">
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Button variant="text" size="sm">
                Forgot password?
        </Button>
      </HStack>
      <Stack spacing="6">
        <Button>Sign in</Button>
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
                  Continue with Google
                </Button>
                <Button variant="secondary" leftIcon={<GitHubIcon />}>
                  Continue with GitHub
                </Button>
              </Stack>
            </Stack>
            {/* <HStack spacing="1" justify="center">
        <Text textStyle="sm" color="fg.muted">
          Having issues? <Link href="#">Contact us</Link>
        </Text>
      </HStack> */}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  </Box>
)
