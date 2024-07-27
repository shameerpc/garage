import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages";
import Login from "../pages/auth/login";
import RegisterAccount from "../pages/auth/register";
import CustomerLayout from "../layouts/Customer.Layout";
import Home from "../pages/dashboard";
import CustomerDetails from "../pages/customer/detail";
import Success from "../components/common/Success";
import ForgotPassword from "../pages/auth/forgot";
import ManageCustomers from "../pages/customer/manage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "success",
    element: <Success />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/register",
    element: <RegisterAccount />,
    // errorElement: <ErrorPage />,
  },
  {
    element: <CustomerLayout />,
    path: "customer",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail-view",
        element: <CustomerDetails />,
      },
      {
        path: "manage",
        element: <ManageCustomers />,
      },
    ],
  },
]);

export default appRouter;
