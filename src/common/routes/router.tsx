import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userGroupRouter } from "./user-group.router";
import About from "../../ui/pages/About";

export const router = createBrowserRouter([
  ...userGroupRouter,
  {
    path: "/*",
    element: <About />,
  },
]);
