import {
  Box, Flex, Text,
  Heading, HStack, Icon, Stack
} from '@chakra-ui/react'
import React from 'react'
import { FiArrowDownRight, FiArrowUpRight, FiMoreVertical } from 'react-icons/fi'

const YesterdayChange: React.FC = () => {
  return (
    <Box
      m="0px"
      // mr="10px"
      backgroundRepeat='no-repeat'
      background='bg.surface'
      bgPosition='10%'
      p='16px'
      flexDirection="column"
      width="Full"
      minWidth="0px"
      backgroundClip="border-box"
      borderRadius="2xl"
      shadow="sm"
      h={{ sm: '300px', xl: '300px' }}
      gridArea={{ md: '1 / 2 / 1 / 2', xl: '1 / 2 / 1 / 2' }}
    >
      <Box h='100%' w='100%' bg="bg.surface">
        <Flex
          direction='column'
          color='inherit'
          h='100%'
          p='0px 10px 20px 10px'
          w='100%'>
          <Flex justify='space-between' align='center'>
            <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Day to Day Change
            </Text>
          </Flex>
          <Box
            px={{ base: '2', md: '2' }}
            py={{ base: '2', md: '2' }}
            bg="bg.surface"
            textAlign="center"
            mt="15px"
          >
            <Stack textAlign="center" align="center" spacing={{ base: '5', md: '6' }}>
              <Stack direction="row" justify="space-between" textAlign="center" align="center">
                {/* <HStack spacing="4">
            <Square size="12" bg="bg.accent.subtle" borderRadius="md">
              <Icon as={FiMoreVertical} boxSize="6" color="fg.accent.default" />
            </Square>
            <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Day to Day Change
            </Text>
          </HStack> */}
                {/* <Icon as={FiMoreVertical} boxSize="5" color="fg.muted" /> */}
              </Stack>
              <Stack spacing="4">
                <Heading color="currentColor" size={{ base: 'sm', md: 'md' }}>60%</Heading>
                <HStack align="center" textAlign="center" spacing="1" fontWeight="medium">
                  <Icon
                    color={true ? 'success' : 'error'}
                    as={true ? FiArrowUpRight : FiArrowDownRight}
                    boxSize="5"
                  />
                  <Text color={true ? 'success' : 'error'}>5.2%</Text>
                  <Text color="fg.muted">vs yesterday</Text>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default YesterdayChange
