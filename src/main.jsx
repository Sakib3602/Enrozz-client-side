import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "./components/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CaroDetailPage from "./components/Home/CaroDetailPage";
import JoinUs from "./components/Authentication/JoinUs";
import Registration from "./components/Authentication/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/caroDetail/:id",
        element: <CaroDetailPage></CaroDetailPage>,
      },
      {
        path: "/joinUs",
        element: <JoinUs></JoinUs>
      },
      {
        path: "/registation",
        element: <Registration></Registration>
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {" "}
      <RouterProvider router={router} />{" "}
    </QueryClientProvider>
  </React.StrictMode>
);
