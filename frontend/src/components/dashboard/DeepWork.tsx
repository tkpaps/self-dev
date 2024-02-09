// Chakra imports
import { Flex, Text, useColorModeValue, Box } from "@chakra-ui/react";
// Custom components
import React from "react";
import { Card } from './general/Card'

const DeepWork = ({ icon, title, description, amount }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Box p="22px" display="flex" flexDirection="column" width="Full" position="relative" minWidth="0px" backgroundClip="border-box" >
      <Box borderRadius="2xl" width="full" p='16px' display='flex' bg="bg.surface" shadow="sm">
        <Flex direction='column' align='center' w='100%' py='14px'>
          <Box h={"60px"} w={"60px"} bg={iconTeal}>
            {icon}
          </Box>
          <Flex
            direction='column'
            m='14px'
            justify='center'
            textAlign='center'
            align='center'
            w='100%'>
            <Text fontSize='md' color={textColor} fontWeight='bold'>
              {title}
            </Text>
            <Text
              mb='24px'
              fontSize='xs'
              color='gray.400'
              fontWeight='semibold'>
              {description}
            </Text>
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {`%${amount}`}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default DeepWork;