import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface JournalProps {
  title: string;
}

const Journal: React.FC<JournalProps> = (props) => {
  return (
    <Box
      p='0px 10px 20px 30px'
      my={{ sm: '0px', lg: '0px' }}
      ms={{ sm: '0px', lg: '0px' }}
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
      <Flex justify='space-between' align='center'
        p='20px 0px 20px 0px'
        w='100%'>
        <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
          {props.title}
        </Text>
      </Flex>
      <Box>
        <Flex direction='column' w='100%'>
        </Flex>
      </Box>
    </Box>
  )
}

export default Journal
