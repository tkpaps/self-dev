import React from 'react'
import { DashBoardNavBar } from '../components/dashboard/DashBoardNavBar'
import DashBoardContent from '../components/dashboard/DashBoardContent'
import { Footer } from '../components/footer/Footer'
import {Box} from '@chakra-ui/react'

export default function DashBoardpage() {

    return (
        <>
            <DashBoardNavBar/>
            <DashBoardContent/>
            <Box mt="8">
                <Footer />
            </Box>
        </>
    )
}