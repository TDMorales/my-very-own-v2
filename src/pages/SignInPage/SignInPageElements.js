import styled from "styled-components";
import Image from "../../assets/landscape.png";

export const SignInPageContainer = styled.div`
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


