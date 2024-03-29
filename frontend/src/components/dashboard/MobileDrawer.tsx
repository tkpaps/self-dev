import React from 'react'
import { Drawer, DrawerBody, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ToggleButton } from './ToggleButton'
import { SideBar } from './SideBar'

export const MobileDrawer : React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex' }}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} >
        <DrawerContent p={-8} m={0} >
          <DrawerBody p={-8} m={0} mt="72px">
            <SideBar/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
