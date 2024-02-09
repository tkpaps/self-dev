import React from 'react'
import { DashBoardNavBar } from '../components/dashboard/DashBoardNavBar'
import DashBoardContent from '../components/dashboard/DashBoardContent'
import { Footer } from '../components/footer/Footer'

export default function DashBoardpage() {

    return (
        <>
            <DashBoardNavBar/>
            <DashBoardContent/>
            <Footer/>
        </>
    )
}