import { React, useEffect, useState } from 'react'
import { navList, navListAuth } from './NavBarData'
import { useNavigate } from 'react-router-dom'
import {
    Nav,
    NavBarContainer,
    HamburgerMenu,
    NavMenu,
    NavItem,
    NavLinkS,
    NavLinkR,
} from './NavBarElements'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
    const [navOptions, setNavOptions] = useState([])
    const [authUser, setAuthUser] = useState(false)

    useEffect(() => {
        handleNavOptions()
    })

    const handleNavOptions = () => {
        authUser ? setNavOptions(navListAuth) : setNavOptions(navList)
    }

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <HamburgerMenu>
                        <FaBars />
                    </HamburgerMenu>
                    <NavMenu>
                        {navOptions.map((nav) => (
                            (nav.name === "SIGN IN" || nav.name === "SIGN OUT") ?
                                < NavItem >
                                    <NavLinkR to={nav.link} key={nav.name}>{nav.name}</NavLinkR>
                                </NavItem> :
                                < NavItem >
                                    <NavLinkS to={nav.link} key={nav.name}>{nav.name}</NavLinkS>
                                </NavItem>
                        ))}
                    </NavMenu>
                </NavBarContainer>
            </Nav >
        </>
    )
}

export default NavBar