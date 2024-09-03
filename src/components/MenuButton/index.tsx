"use client";
import React from "react";
import MenuIcon from "@/icons/MenuIcon";
import SideNav from "../SideNav";

const IconButton = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState<boolean>(false);
  const openSideNav = () => {
    setIsSideNavOpen(true);
  };
  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };
  return (
    <>
      {/* Mobile Menu */}
      <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />
      {/* Mobile Menu Button */}
      <div onClick={openSideNav}>
        <MenuIcon />
      </div>
    </>
  );
};

export default IconButton;
