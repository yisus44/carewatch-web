import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userGroupRouter } from "./user-group.router";

export const router = createBrowserRouter([...userGroupRouter]);
