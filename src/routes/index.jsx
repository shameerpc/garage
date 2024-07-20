import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages";
import Login from "../pages/auth/login";
import RegisterAccount from "../pages/auth/register";

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
    path: "/register",
    element: <RegisterAccount />,
    // errorElement: <ErrorPage />,
  },

]);

export default appRouter;
