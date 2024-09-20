import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateNews from "../pages/CreateNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoute from "./protectedRoutes";
import { isAuthenticated } from "../utils/helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      {
        element: <ProtectedRoute isProtected={isAuthenticated()} />,
        children: [
          { path: "/profile", element: <Profile /> },
          {
            path: "/create-news",
            element: <CreateNews />,
          },
        ],
      },
    ],
  },
]);

export default router;
