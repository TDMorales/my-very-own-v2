import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: transparent;
    height: 10vh;
    margin-top: -10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
`

export const HamburgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinkS = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-family: 'Alice', serif;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
export const NavLinkR = styled(LinkR)`
    color: white;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-family: 'Alice', serif;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`