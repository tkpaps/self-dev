import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  FormHelperText,
  Stack,
  Heading,
  Text,
  Input,
  Link,
  Checkbox,
  FormControl,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Logo } from './Logo'
import { MobileDrawer } from './MobileNavbar'
import { ToggleButton } from './ToggleButton'
import { SignUp } from '../authentication/SignUp'
import { Login } from '../authentication/Login'

export const LandingPageNavbar = () => {
  // should change this to be like signup 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const signUpDisclosure = useDisclosure()
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const mobileNavbar = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="section" >
      <Box borderBottomWidth="1px" bg="bg.surface" position="relative" zIndex="10">
        <Container py="4">
          <HStack justify="space-between" >
            <Logo />
            {isDesktop ? (
              <HStack spacing="8">
                <ButtonGroup size="lg" variant="text" colorScheme="gray" spacing="20">
                  <RouterLink to="/features">
                    <Button>Features</Button>
                  </RouterLink>
                  <RouterLink to="/users">
                    <Button>Users</Button>
                  </RouterLink>
                  <RouterLink to="/pricing">
                    <Button>Pricing</Button>
                  </RouterLink>
                </ButtonGroup>
                <ButtonGroup marginLeft="40px">
                  <>
                    <Button width='100px' variant="outline" colorScheme='teal' onClick={onOpen}>
                        Login
                    </Button>
                    <Drawer
                      isOpen={isOpen}
                      placement='right'
                      size="sm"
                      //   initialFocusRef={firstField}
                      onClose={onClose}
                    >
                      <DrawerOverlay zIndex="20"/>
                      <DrawerContent mt="0">
                        <DrawerCloseButton mt="1"/>
                        <DrawerBody>
                          <Container maxW="lg" py={{ base: '12', md: '12' }} px={{ base: '0', sm: '8' }}>
                            <Stack spacing="8">
                              <Stack spacing="6">
                                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                  <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                                  <Text color="fg.muted">
                                    Don't have an account? <Link as={RouterLink} to='/signup'>Sign up</Link>
                                  </Text>
                                </Stack>
                              </Stack>
                                <Login/>
                            </Stack>
                          </Container>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </>
                  <>
                    <Button width='100px' variant='solid' onClick={signUpDisclosure.onOpen}>Sign Up</Button>
                    <Drawer
                      isOpen={signUpDisclosure.isOpen}
                      placement='right'
                      size="sm"
                      //   initialFocusRef={firstField}
                      onClose={signUpDisclosure.onClose}
                    >
                      <DrawerOverlay zIndex="20"/>
                      <DrawerContent mt="0">
                        <DrawerCloseButton mt="1"/>
                        <DrawerBody>
                          <Container maxW="lg" py={{ base: '12', md: '12' }} px={{ base: '0', sm: '8' }}>
                            <Stack spacing="8">
                              <Stack spacing="6" align="center">
                                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                  <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
                                  <Text color="fg.muted" textAlign="center">
                                    Already have an account? <Link as={RouterLink} to="/login">Login</Link>
                                  </Text>
                                </Stack>
                              </Stack>
                              <SignUp/>
                            </Stack>
                          </Container>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </>
                  <Button variant="outline" onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                  </Button>
                </ButtonGroup>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer isOpen={mobileNavbar.isOpen} onClose={mobileNavbar.onClose} />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
