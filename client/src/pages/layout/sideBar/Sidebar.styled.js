import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;

  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  align-items: center;
  margin: 1rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(Link)`
  margin: 0.2rem;
  background: #9254ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #9254ff, #0d0d0d);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #9254ff, #0d0d0d);
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
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
