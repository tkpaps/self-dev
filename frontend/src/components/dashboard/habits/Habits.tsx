import { Box, Flex, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Habits: React.FC = () => {
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
      <Box h='100%' w='100%' bg="bg.surface">
        <Flex
          direction='column'
          color='accent'
          h='100%'
          p='0px 0px 20px 0px'
          w='100%'>
          <Flex justify='space-between' align='center'>
            <Text color="fg.muted" fontSize='lg' fontWeight='bold'>
              ToDo
            </Text>
          </Flex>
          <Flex direction='column'>
            <Box mt="35px" textAlign="center">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FiArrowRight} color='green.500' />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={FiArrowRight} color='green.500' />
                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={FiArrowRight} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <ListIcon as={FiArrowRight} color='green.500' />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Habits
