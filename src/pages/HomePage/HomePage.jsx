import React from 'react'
import { BrandContainer, BrandName, BrandTagline, HomePageContainer, HomePageOverlay, Logo } from './HomePageElements'
import logo from "../../assets/Logo.png";

const HomePage = () => {
    return (
        <HomePageContainer id='home'>
            <HomePageOverlay>
                <BrandContainer>
                    <Logo src={logo} />
                    <BrandName>My Very Own</BrandName>
                    <BrandTagline>Where your memory lives on.</BrandTagline>
                </BrandContainer>
            </HomePageOverlay>
        </HomePageContainer>
    )
}

export default HomePage;