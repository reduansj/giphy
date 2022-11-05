import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavBarLink,
} from "./NavBar.styled";
const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Gifiy'S</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavBarLink to="/">HOME</NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="/sports">SPORTS</NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="/funny">FUNNY</NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="/create">CREATE</NavBarLink>
          </NavItem>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signIn">Sign In</NavBtnLink>
        </NavBtn> */}
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
