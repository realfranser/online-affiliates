import { ToggleOff } from "@material-ui/icons";
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
                src={
                  process.env.PUBLIC_URL +
                  "logosOA/oalogoGrisVerdeIluminado.png"
                }
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    process.env.PUBLIC_URL + "logosOA/oalogoFondoNegro.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    process.env.PUBLIC_URL +
                    "logosOA/oalogoGrisVerdeIluminado.png")
                }
                style={{ height: 50 }}
              />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="support"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Support
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
                  offset={-80}
                >
                  Contact us
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
                  offset={-80}
                >
                  Get notified
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
                  offset={-80}
                >
                  Sign in
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/becomeAffiliate">Become Affiliate</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
