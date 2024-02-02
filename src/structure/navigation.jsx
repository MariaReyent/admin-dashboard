import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Private from "../pages/Private";

export const nav = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/private",
    name: "Private",
    element: <Private />,
    isMenu: true,
    isPrivate: true,
  },
];
