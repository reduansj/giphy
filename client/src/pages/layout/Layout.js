import NavBar from "pages/layout/navBar/NavBar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar/SideBar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
