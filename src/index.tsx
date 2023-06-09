/** @format */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import { Loading } from "./utils/hoc";
import { element } from "./routes/Allroutes";
import { dashBoardElement } from "./routes/DashBoardRoute";

const datas = {
  name: 22,
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      {typeof datas?.name === "string" ? (
        <RouterProvider router={dashBoardElement}></RouterProvider>
      ) : (
        <RouterProvider router={element}></RouterProvider>
      )}
    </Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
