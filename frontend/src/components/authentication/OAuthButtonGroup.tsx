import React from 'react';
import { Button, ButtonGroup, VisuallyHidden, Stack, HStack, Divider, Text, Link, Container } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'

const providers = [
  { name: 'Google', icon: <GoogleIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
  { name: 'GitHub', icon: <GitHubIcon /> },
]

export const OAuthButtonGroup = () => (
    <Container maxW="lg" py={{ base: '4', md: '4' }}>
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
          {/* <Button variant="secondary" leftIcon={<TwitterIcon />}>
            Continue with Twitter
          </Button> */}
          <Button variant="secondary" leftIcon={<GitHubIcon />}>
            Continue with GitHub
          </Button>
        </Stack>
      </Stack>
      <HStack spacing="1" justify="center">
        <Text textStyle="sm" color="fg.muted">
          Having issues? <Link href="#">Contact us</Link>
        </Text>
      </HStack>
    </Stack>
  </Container>
)