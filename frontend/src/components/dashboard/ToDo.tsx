import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ToDo : React.FC = () => {
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Box
      p='20px 10px 20px 30px'
      my={{ sm: '24px', lg: '0px' }}
      ms={{ sm: '0px', lg: '24px' }}
      backgroundImage="bg.surface"
      backgroundRepeat='no-repeat'
      background='bg.surface'
      bgPosition='10%'
      flexDirection="column"
      width="Full"
      minWidth="0px"
      backgroundClip="border-box"
      borderRadius="2xl"
      shadow="sm"
    >
      <Flex justify='space-between' align='center'>
        <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Change Log
        </Text>
      </Flex>
      <Box>
        <Flex direction='column' w='100%'>
        </Flex>
      </Box>
    </Box>
  )
}

export default ToDo
