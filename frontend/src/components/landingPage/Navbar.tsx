import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
    Stack,
    Textarea,
    Heading,
    Text,
    Select,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Link,
    Checkbox,
    FormControl,
    Divider,
  } from '@chakra-ui/react'
  import { SunIcon, MoonIcon } from '@chakra-ui/icons';
  import { Logo } from './Logo';
  import { MobileDrawer } from './MobileNavbar';
  import { ToggleButton } from './ToggleButton';
  import { OAuthButtonGroup } from '../authentication/OAuthButtonGroup'
    import { PasswordField } from '../authentication/PasswordField'
  
  export const LandingPageNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                <HStack  spacing="8">
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
                            {/* <DrawerHeader  borderBottomWidth='1px'>
                                <Heading size="sm">
                                    Log in to your account
                                </Heading>
                            </DrawerHeader> */}
                            <DrawerBody>
                            <Container maxW="lg" py={{ base: '12', md: '12' }} px={{ base: '0', sm: '8' }}>
                                    <Stack spacing="8">
                                    <Stack spacing="6">
                                        {/* <Logo /> */}
                                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                                        <Text color="fg.muted">
                                            Don't have an account? <Link as={RouterLink} to='/signup'>Sign up</Link>
                                        </Text>
                                        </Stack>
                                    </Stack>
                                    <Box
                                        // py={{ base: '0', sm: '8' }}
                                        // px={{ base: '4', sm: '10' }}
                                        // bg={{ base: 'transparent', sm: 'bg.surface' }}
                                        // boxShadow={{ base: 'none', sm: 'md' }}
                                        borderRadius={{ base: 'none', sm: 'xl' }}
                                    >
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
                                            {/* <HStack>
                                            <Divider />
                                            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                                or continue with
                                            </Text>
                                            <Divider />
                                            </HStack> */}
                                            <OAuthButtonGroup />
                                        </Stack>
                                        </Stack>
                                    </Box>
                                    </Stack>
                                </Container>
                            </DrawerBody>
                
                            {/* <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='teal'>Submit</Button>
                            </DrawerFooter> */}
                        </DrawerContent>
                        </Drawer>
                    </>
                  <Button width='100px' variant='solid'>Sign Up</Button>
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