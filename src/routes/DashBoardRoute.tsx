/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashBoardLayout } from "../components";

export const dashBoardElement = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout />,
  },
]);
