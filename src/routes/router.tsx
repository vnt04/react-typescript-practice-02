import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateNews from "../pages/CreateNews";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
        path: "/create-news",
        element: <CreateNews />,
      },
    ],
  },
]);

export default router;
