import { Flex, Text, useColorModeValue, Box } from '@chakra-ui/react'

import React from 'react'

const DeepWork: React.FC = () => {

  return (
    <Box mt= "0px" p="0px" display="flex" flexDirection="column" width="Full" position="relative" minWidth="0px" backgroundClip="border-box"
      gridArea={{ md: '2 / 1 / 2 / 3', xl: '1 / 3 / 1 / 5' }}>
      <Box h={{ sm: '300px', xl: '300px' }} borderRadius="2xl" width="full" p='0px' display='flex' bg="bg.surface" shadow="sm">
        <Flex direction='column' align='left' w='100%' py='14px'>
          <Box>
          </Box>
          <Flex
            direction='column'
            // m='14px'
            p='0px 10px 20px 25px'
            justify='center'
            textAlign='left'
            align='left'
            w='100%'>
            <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              Week at a Glance
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default DeepWork
