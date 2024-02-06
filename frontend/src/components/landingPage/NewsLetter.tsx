import React from 'react';
import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  
  export const NewsLetter = () => (
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '8', md: '10' }} align="center" maxW="3xl" mx="auto">
        <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
          <Heading size={{ base: 'sm', md: 'md' }}>Acquire the discipline you need, for free </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
            Our weekly newsletter helps you stay on track with your personal and professional goals. Providing new tactics and approaches for common problems and creative solutions to help you crush everyday.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} width="full" maxW={{ md: 'lg' }} spacing="4">
          <FormControl flex="1">
            <Input type="email" size="xl" placeholder="Enter your email" />
            <FormHelperText color="fg.subtle">We send you at most one mail per month</FormHelperText>
          </FormControl>
          <Button size="xl">Subscribe</Button>
        </Stack>
      </Stack>
    </Container>
  )