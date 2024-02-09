// Chakra imports
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
// Custom components
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
import React from "react";

const Career = ({
  backgroundImage,
  title,
  icon,
  number,
  validity,
  cvv,
}) => {
  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundRepeat='no-repeat'
      border="1px"
      background='cover'
      bgPosition='10%'
      p='16px'
      h={{ sm: "220px", xl: "100%" }}
      gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}>
      <Box h='100%' w='100%'>
        <Flex
          direction='column'
          color='accent'
          h='100%'
          p='0px 10px 20px 10px'
          w='100%'>
          <Flex justify='space-between' align='center'>
            <Text fontSize='md' fontWeight='bold'>
              {title}
            </Text>
            {icon}
          </Flex>
          <Spacer />
          <Flex direction='column'>
            <Box>
              <Text fontSize='xl' letterSpacing='2px' fontWeight='bold'>
                {number}
              </Text>
            </Box>
            <Flex mt='14px'>
              <Flex direction='column' me='34px'>
                <Text fontSize='xs'>{validity.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {validity.date}
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='xs'>{cvv.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {cvv.code}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Career;