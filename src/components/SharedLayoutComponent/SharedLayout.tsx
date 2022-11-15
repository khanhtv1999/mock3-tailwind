import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../NavbarComponent/NavbarComponent";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
