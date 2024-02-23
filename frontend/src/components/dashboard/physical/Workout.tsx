import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Workout: React.FC = (props) => {
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
      h={{ sm: '600px', md: '800px', lg: '800px', xl: '800px' }}
      gridArea={{ md: '1 / 1 / 1 / 1', xl: '1 / 1 / 1 / 1' }}
    >
      <Flex justify='space-between' align='center'>
        <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Workout
        </Text>
      </Flex>
      <Box>
        <Flex direction='column' w='100%'>
        </Flex>
      </Box>
    </Box>
  )
}

export default Workout
