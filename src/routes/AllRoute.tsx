/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { Home } from "../pages";
import { ErrorBoundary } from "../util";

const AllRoute = () => {
  const element = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorBoundary />,
          hasErrorBoundary: true,
        },
      ],
    },
  ]);

  return element;
};

export default AllRoute;
