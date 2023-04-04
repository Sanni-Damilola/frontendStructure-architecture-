/** @format */

import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { lazy } from "react";
import { ErrorBoundary, NotFound } from "../utils";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/Home"));

export const element = createBrowserRouter([
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
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
  },
]);
