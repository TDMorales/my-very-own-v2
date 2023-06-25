import { React, useState } from 'react'
import {
    Nav,
    NavBarContainer,
    HamburgerMenu,
    NavMenu,
    NavItem,
    NavLink,
} from './NavBarElements'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
    const navOptions = ["HOME", "SIGN IN", "SIGN UP", "ABOUT US"];
    const authNavOptions = ["HOME", "PROFILE", "SETTINGS", "LOG OUT"];

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <HamburgerMenu>
                        <FaBars />
                    </HamburgerMenu>
                    <NavMenu>
                        < NavItem >
                            <NavLink to="home">HOME</NavLink>
                        </NavItem>
                        < NavItem >
                            <NavLink to="about">ABOUT</NavLink>
                        </NavItem>
                        < NavItem >
                            <NavLink to="services">OUR SERVICES</NavLink>
                        </NavItem>
                        < NavItem >
                            <NavLink to="about">SIGN UP</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav >
        </>
    )
}

export default NavBar