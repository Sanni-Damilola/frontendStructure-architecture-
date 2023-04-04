/** @format */

import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { ErrorBoundary } from "../utils/hoc";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

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
    path: "/About",
    element: <About />,
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
  },
]);
