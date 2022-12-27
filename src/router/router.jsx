import { createBrowserRouter } from "react-router-dom";
import DisplayError from "../components/common/displayError/DisplayError";
import Register from "../components/pages/authentication/Register";
import SingIn from "../components/pages/authentication/SingIn";
import Contact from "../components/pages/Contact";
import AllUser from "../components/pages/dashboard/AllUser";
import Home from "../components/pages/home/Home";
import Cart from "../components/pages/product/Cart";
import Shop from "../components/pages/Shop";
import DashboardLayout from "../root/DashboardLayout";
import Main from "../root/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singIn",
        element: <SingIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard",
        element: <AllUser />,
      },
    ],
  },
]);
