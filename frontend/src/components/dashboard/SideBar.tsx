import React from 'react'
import {
    Avatar,
    Box,
    Flex,
    HStack,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    StackDivider,
    Text,
  } from '@chakra-ui/react'
  import {
    FiBarChart2,
    FiCamera,
    FiFilm,
    FiHome,
    FiInstagram,
    FiLinkedin,
    FiMic,
    FiMusic,
    FiTwitter,
    FiLayout,
    FiBookOpen,
    FiCalendar,
    FiYoutube,
    FiUsers,
    FiFileText,
  } from 'react-icons/fi'
  import {
    FiBookmark,
    FiClock,
    FiGrid,
    FiHelpCircle,
    FiMoreVertical,
    FiPieChart,
    FiSearch,
    FiSettings,
  } from 'react-icons/fi'
//   import { DocumentCollapse } from './DocumentCollapse'
  import { Logo } from '../landingPage/Logo'
  import { SidebarButton } from './SidebarButton'
  import { NavButton } from './NavButton'

  
  export const SideBar = () => (

    <Flex as="section" minH="100vh" bg="bg.canvas">
    <Flex
      flex="1"
      bg="bg.surface"
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1" width="full">
        <Stack spacing="8" shouldWrapChildren>
          {/* <Logo /> */}
          <Stack spacing="1">
          <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Media
            </Text>
            <NavButton label="Home" icon={FiHome} />
            <NavButton label="Today" icon={FiLayout} aria-current="page" />
            <NavButton label="Week" icon={FiCalendar} />
            <NavButton label="Progress" icon={FiBarChart2} />
          </Stack>
          <Stack>
            <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Courses
            </Text>
            <NavButton label="Coming Soon" icon={FiBookOpen} />
            </Stack>
            <Stack>
            <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Free Resources
            </Text>
            <Stack spacing="1">
              <NavButton label="Podcast" icon={FiMic} />
              <NavButton label="Community" icon={FiUsers} />
              <NavButton label="Blog" icon={FiFileText} />
            </Stack>
          </Stack>
          <Stack>
            <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Social
            </Text>
            <Stack spacing="1">
              <NavButton label="Youtube" icon={FiYoutube} />
              <NavButton label="Twitter" icon={FiTwitter} />
              <NavButton label="Instagram" icon={FiInstagram} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>


    // <Flex as="section" minH="92vh">
    //   <Stack
    //     flex="1"
    //     maxW={{ base: 'full', sm: 'full' }}
    //     py={{ base: '8', sm: '6' }}
    //     px={{ base: '8', sm: '6' }}
    //     bg="bg.accent.default"
    //     color="fg.accent.default"
    //     borderRightWidth="0px"
    //     justifyContent="space-between"
    //   >
    //     <Stack spacing="8">
    //       {/* <Logo alignSelf="start"/> */}
    //       {/* <InputGroup>
    //         <InputLeftElement>
    //           <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
    //         </InputLeftElement>
    //         <Input placeholder="Search" variant="filled.accent" />
    //       </InputGroup> */}
    //       <Stack spacing="1">
    //         <SidebarButton leftIcon={<FiGrid />}>Dashboard</SidebarButton>
    //         <SidebarButton leftIcon={<FiPieChart />}>Analysis</SidebarButton>
    //         {/* <DocumentCollapse /> */}
    //         <SidebarButton leftIcon={<FiClock />}>History</SidebarButton>
    //         <SidebarButton leftIcon={<FiBookmark />}>Favorites</SidebarButton>
    //       </Stack>
    //     </Stack>
    //     <Stack spacing="4" divider={<StackDivider borderColor="bg.accent.subtle" />}>
    //       <Box />
    //       <Stack spacing="1">
    //         <SidebarButton leftIcon={<FiHelpCircle />}>Help Center</SidebarButton>
    //         <SidebarButton leftIcon={<FiSettings />}>Settings</SidebarButton>
    //       </Stack>
    //       <HStack spacing="3" justify="space-between">
    //         <HStack spacing="3">
    //           <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
    //           <Box>
    //             <Text textStyle="sm" fontWeight="medium">
    //               John Doe
    //             </Text>
    //             <Text textStyle="sm" color="fg.accent.muted">
    //               john@chakra-ui.com
    //             </Text>
    //           </Box>
    //         </HStack>
    //         <IconButton variant="tertiary.accent" icon={<FiMoreVertical />} aria-label="Open Menu" />
    //       </HStack>
    //     </Stack>
    //   </Stack>
    // </Flex>
  )