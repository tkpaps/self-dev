import { Box, Flex, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

const Career: React.FC = () => {
  return (
    <Box
      m="0px"
      // mr="10px"
      backgroundImage="bg.surface"
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
      gridArea={{ md: '1 / 1 / 1 / 1', xl: '1 / 1 / 1 / 1' }}
    >
      <Box h='100%' w='100%' bg="bg.surface">
        <Flex
          direction='column'
          color='accent'
          h='100%'
          p='0px 0px 20px 0px'
          w='100%'>
          <Flex justify='space-between' align='center'>
            <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Progress
            </Text>
          </Flex>
          <Flex direction='column'>
            <Box mt="35px" textAlign="center">
              <CircularProgress size="150px" thickness="15px" value={72} color='accent'>
                <CircularProgressLabel color="fg.muted">72%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Career
