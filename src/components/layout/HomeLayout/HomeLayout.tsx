/** @format */

import React from "react";
import { Footer, Header } from "../../blocks";

import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
