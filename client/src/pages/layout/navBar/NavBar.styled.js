import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const Nav = styled.nav`
  background: #9254ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #9254ff, #0d0d0d);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #9254ff, #0d0d0d);
  height: 80px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 90px) {
    transition: 0.8s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBarLink = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: yellow;
    font: bolder;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #9254ff;
  white-space: nowrap;
  padding: 10px 27px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
