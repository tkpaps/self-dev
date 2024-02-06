import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, ButtonGroup, Drawer, DrawerBody, DrawerContent, DrawerProps, Stack, useColorMode, } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';

export function MobileDrawer (props: Omit<DrawerProps, 'children'>) {

  const { colorMode, toggleColorMode } = useColorMode()  

  return (
  <Drawer placement="top" {...props}>
    <DrawerContent>
        <Logo mt="8"/>
      <DrawerBody mt="4">
        <Stack spacing="6" align="stretch">
                    <RouterLink to="/features">
                    <Button size="lg" variant="text" colorScheme="gray">Features</Button>
                    </RouterLink>
                    <RouterLink to="/users">
                    <Button size="lg" variant="text" colorScheme="gray">Users</Button>
                    </RouterLink>
                    <RouterLink to="/pricing">
                    <Button size="lg" variant="text" colorScheme="gray">Pricing</Button>
                    </RouterLink>
          <RouterLink to="/login">        
            <Button variant="outline" w="full">
                Login
            </Button>
          </RouterLink>  
          <RouterLink to="/signup">        
            <Button w="full">
                Sign Up
            </Button>
          </RouterLink>  
          <Button variant="outline" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          </Button>
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  );
}