import { React, useEffect, useState } from 'react'
import { navList, navListAuth } from './NavBarData'
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
                            < NavItem >
                                <NavLink to={nav.link} key={nav.name}>{nav.name}</NavLink>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavBarContainer>
            </Nav >
        </>
    )
}

export default NavBar