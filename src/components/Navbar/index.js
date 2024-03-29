import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBlank,
  NavBlankLinks,
} from "./NavbarElements";
import logo1 from "./images/oalogoGrisVerdeIluminado.png";
import logo2 from "./images/oalogoFondoNegro.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              {/*logo OA, implementarlo en clase navbar Elements
               ,hacer que refresque la pagina
               y hacer que se ilumine cuando se pasa por encima de NavLogo*/}
              <img
                alt="logo"
                src={logo1}
                onMouseOver={(e) => (e.currentTarget.src = logo2)}
                onMouseOut={(e) => (e.currentTarget.src = logo1)}
                style={{ height: 50 }}
              />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={10}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavBlank>
                <NavBlankLinks to="/"></NavBlankLinks>
              </NavBlank>
              <NavItem>
                <NavLinks
                  to="contactus"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={10}
                >
                  How it works
                </NavLinks>
              </NavItem>
              <NavBlank>
                <NavBlankLinks to="/"></NavBlankLinks>
              </NavBlank>
              <NavItem>
                <NavLinks
                  to="getnotified"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={10}
                >
                  Contact us
                </NavLinks>
              </NavItem>
              <NavBlank>
                <NavBlankLinks to="/"></NavBlankLinks>
              </NavBlank>
              <NavItem>
                <NavLinks
                  to="signin"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={10}
                >
                  Become Affiliate
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/becomeAffiliate">Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
