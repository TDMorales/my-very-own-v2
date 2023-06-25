import React from 'react'
import NavBar from '../NavBar/NavBar'
import HomePage from '../../pages/HomePage/HomePage'
import InfoSection from '../InfoSection/InfoSection'
import ServicesSection from '../ServicesSection/ServicesSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data'

const LandingSection = () => {
    return (
        <>
            <NavBar />
            <HomePage />
            <InfoSection {...homeObjOne} />
            <ServicesSection />
            {/* <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} /> */}
        </>
    )
}

export default LandingSection