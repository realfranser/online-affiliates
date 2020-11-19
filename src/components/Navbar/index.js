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
              src={process.env.PUBLIC_URL + "oalogoGris.png"}
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "oalogoFondoNegro.png")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "oalogoGris.png")
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
            <NavItem>
              <NavLinks to="contact">Contact us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="affiliates">Become Affiliate</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
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
