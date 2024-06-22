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
import AuthProvider from "./components/Authentication/AuthProvider";
import Products from "./components/Products/Products";
import ProductsDetails from "./components/Products/ProductsDetails";
import Cart from "./components/Cart/Cart";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import DashBord from "./components/DashBord/DashBord";
import UserProfile from "./components/DashBord/UserProfile.jsx/UserProfile";
import UpdateProfile from "./components/DashBord/UpdateProfile";
import FullReview from "./components/DashBord/FullReview";
import BuyForm from "./components/BuySection/BuyForm";
import Succes from "./components/BuySection/Succes";
import Fail from "./components/BuySection/Fail";
import Cancel from "./components/BuySection/Cancel";
import AllUser from "./components/DashBord/Admin/AllUser";
import SafeUrlAdmin from "./components/DashBord/Admin/SafeUrlAdmin";
import Order from "./components/DashBord/Admin/Order";

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
        element: <JoinUs></JoinUs>,
      },
      {
        path: "/registation",
        element: <Registration></Registration>,
      },
      {
        path: "/products/:category",
        element: <Products></Products>,
      },
      {
        path: "/productsDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/succes",
        element: (
          <PrivateRoute>
            <Succes></Succes>
          </PrivateRoute>
        ),
      },
      {
        path: "/fail",
        element: (
          <PrivateRoute>
            <Fail></Fail>
          </PrivateRoute>
        ),
      },
      {
        path: "/cancel",
        element: (
          <PrivateRoute>
            <Cancel></Cancel>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/buyform",
        element: (
          <PrivateRoute>
            <BuyForm></BuyForm>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashbord",
    element: (
      <PrivateRoute>
        <DashBord></DashBord>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "updateUserProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "fullReview",
        element: (
          <PrivateRoute>
            <FullReview></FullReview>
          </PrivateRoute>
        ),
      },
      {
        path: "alluser",
        element: (
          <PrivateRoute>
            <SafeUrlAdmin>
              <AllUser></AllUser>
            </SafeUrlAdmin>
          </PrivateRoute>
        ),
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <SafeUrlAdmin>
             <Order></Order>
            </SafeUrlAdmin>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
