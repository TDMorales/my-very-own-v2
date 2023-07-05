import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesSectionElements'
import icon1 from '../../assets/images/svg-4.svg';
import icon2 from '../../assets/images/svg-5.svg';
import icon3 from '../../assets/images/svg-6.svg';

const ServicesSection = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Basic Plan</ServicesH2>
                    <ServicesP>Create an account for free! Store up to 10 pictures and videos after you create an account.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Memorial Plan</ServicesH2>
                    <ServicesP>Free account and QR code plate setup! Store up to 300 pictures and videos.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our full catalog of services and start to share your story throughout the ages.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection