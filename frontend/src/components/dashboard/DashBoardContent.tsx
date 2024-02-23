import React from 'react'
// Chakra imports
import { Box, Flex, Grid, Heading, } from '@chakra-ui/react'
import Career from './Career'
import DeepWork from './DeepWork'
import YesterdayChange from './YesterdayChange'
import ToDo from './ToDo'
import Habits from './habits/Habits'
import Journal from './habits/Journal'
import Mobility from './physical/Mobility'
import Steps from './physical/Steps'
import Workout from './physical/Workout'
import Breakfast from './food/Breakfast'
import Lunch from './food/Lunch'
import Dinner from './food/Dinner'
import Supplements from './food/Supplements'
import FoodMisc from './food/FoodMisc'

const DashBoardContent : React.FC = () => {
  return (
    <Flex m="8" direction='column' >
      <Heading size="lg" fontWeight="extrabold"
        lineHeight="1.2"
        letterSpacing="tight"
        color="currentColor"
        as="h1"
        ml="4"
      >
            Overview
      </Heading>
      <Grid templateColumns={{ sm: '1fr', lg: '2fr 1.25fr' }} templateRows='1fr'>
        <Box >
          <Grid
            templateColumns={{
              sm: '1fr',
              md: '1fr 1fr',
              xl: '1fr 1fr 1fr 1fr'
            }}
            templateRows={{ sm: 'auto auto auto', md: '1fr 1fr', xl: '1fr' }}
            gap='25px'
          >
            <Career/>
            <YesterdayChange/>
            <DeepWork/>
          </Grid>
          {/* <PaymentMethod
            title={"Payment Method"}
            mastercard={{
              icon: <MastercardIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
          /> */}
        </Box>
        <ToDo/>
      </Grid>
      <Grid templateColumns={{ sm: '1fr', md: '1.6fr 1.2fr', lg: '1.6fr 1.2fr' }}>
        {/* <BillingInformation title={"Billing Information"} data={billingData} />
        <Transactions
          title={"Your Transactions"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        /> */}
      </Grid>
      <Heading size="lg" fontWeight="extrabold"
        lineHeight="1.2"
        letterSpacing="tight"
        color="currentColor"
        as="h1"
        ml="4"
        mt="8"
      >

            Habits
      </Heading>
      <Grid gap='25px' templateColumns={{ sm: '1fr', lg: '1.5fr 1.75fr', xl: '1fr 2.5fr' }} templateRows='1fr'>
        <Habits/>
        <Grid gap="25px">
          <Journal title="Morning Journal"/>
          <Journal title="Evening Journal"/>
        </Grid>
      </Grid>
      <Heading size="lg" fontWeight="extrabold"
        lineHeight="1.2"
        letterSpacing="tight"
        color="currentColor"
        as="h1"
        ml="4"
        mt="8"
      >
            Fitness
      </Heading>
      <Grid gap='25px' templateColumns={{ sm: '1fr', lg: '1.5fr 1.5fr', xl: '1fr 1fr' }} templateRows='1fr'>
        <Workout/>
        <Grid gap="25px">
          <Steps/>
          <Mobility/>
        </Grid>
      </Grid>
      <Heading size="lg" fontWeight="extrabold"
        lineHeight="1.2"
        letterSpacing="tight"
        color="currentColor"
        as="h1"
        ml="4"
        mt="8"
      >
            Nutrition
      </Heading>
      <Grid gap='25px' templateColumns={{ md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr' }} templateRows='1fr'>
        <Breakfast/>
        <Lunch/>
        <Dinner/>
      </Grid>
      <Grid mt="25px" gap='25px' templateColumns={{ sm: '1fr', lg: '1.5fr 1.5fr', xl: '1fr 1fr' }} templateRows='1fr'>
        <FoodMisc/>
        <Supplements/>
      </Grid>
    </Flex>
  )
}

export default DashBoardContent
