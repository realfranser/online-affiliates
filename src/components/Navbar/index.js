import { ToggleOff } from "@material-ui/icons";
import React from "react";
import { FaBars } from "react-icons/fa";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {/*logo OA, implementarlo en clase navbar Elements
               ,hacer que refresque la pagina
               y hacer que se ilumine cuando se pasa por encima de NavLogo*/}
            <img
              src={process.env.PUBLIC_URL + "oalogoGrisVerdeIluminado.png"}
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "oalogoFondoNegro.png")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "oalogoGrisVerdeIluminado.png")
              }
              style={{ height: 50 }}
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="support">Support</NavLinks>
            </NavItem>
            <NavBlank>
              <NavBlankLinks to="/"></NavBlankLinks>
            </NavBlank>
            <NavItem>
              <NavLinks to="contact">Contact us</NavLinks>
            </NavItem>
            <NavBlank>
              <NavBlankLinks to="/"></NavBlankLinks>
            </NavBlank>
            <NavItem>
              <NavLinks to="affiliates">Get notified</NavLinks>
            </NavItem>
            <NavBlank>
              <NavBlankLinks to="/"></NavBlankLinks>
            </NavBlank>
            <NavItem>
              <NavLinks to="signup">Sign in</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/becomeAffiliate">Become Affiliate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
