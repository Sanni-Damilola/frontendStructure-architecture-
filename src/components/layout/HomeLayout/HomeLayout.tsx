/** @format */

import React from "react";
import { Footer, Header } from "../../blocks/homeBlocks";
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
