import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo
                        to='/'
                        onClick={toggleHome}>
                        Lorem
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='#'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='#'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='#'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
