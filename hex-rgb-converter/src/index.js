import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../src/style/index.css";
import App from "./Components/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from "./Components/UserForm";
import UserItem from "./Components/UserItem";
import User from "./Components/User";
import UserList from "./Components/UserList";

export const routeMaps = ([
  {
    path: "/",
    element: <App/>,
    label: "home"
  },
  {
    path: "/user-item",
    element: <UserList/>,
    label: "userList"
  },
  {
    path: "/user-list/:userId",
    element: <User/>,
  }
]);

const router = createBrowserRouter(routeMaps);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);