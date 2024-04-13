import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import PanelLayout from "./layout/PanelLayout";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
