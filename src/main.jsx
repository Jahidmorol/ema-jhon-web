import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CheckOut from "./component/CheckOut/CheckOut";
import Home from "./component/Home/Home";
import Inventory from "./component/Inventory/Inventory";
import cardProductsLoader from "./component/loaders/loader";
import Login from "./component/Login/Login";
import Orders from "./component/Orders/Orders";
import Shop from "./component/Shop/Shop";
import SignUp from "./component/SignUp/SignUp";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/inventory",
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>,
      },
      {
        path: "/checkout",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cardProductsLoader,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
