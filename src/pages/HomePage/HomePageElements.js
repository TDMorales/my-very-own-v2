import styled from "styled-components";
import Image from "../../assets/landscape.png"

export const HomePageContainer = styled.div`
    position: relative;
    background-image: url(${Image});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 860px;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 1;
`
export const HomePageOverlay = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 860px; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(92, 138, 141, 0.2); /* Black background with opacity */
    z-index: 1; /* Specify a stack order in case you're using a different order for other elements */
`

export const BrandContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const Logo = styled.img`
    height: 25vh;
`

export const BrandName = styled.h1`
    color: white;
    font-size: 5vw;
    font-family: 'Abril Fatface', serif;
    text-align: center;
    letter-spacing: 7px;
    margin-bottom: 11px;
`

export const BrandTagline = styled.h1`
    color: white;
    font-size: 1.75vw;
    font-family: 'Alice', serif;
    text-align: center;
    margin: 0;
`