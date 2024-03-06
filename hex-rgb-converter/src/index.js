import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { User } from "./User";

export const routerMaps = [
  {
    path: "/",
    element: <App />,
    lable:'Home',
  },
  {
    path: "/user-form",
    element: <UserForm />,
    lable:'User Form',
  },
  {
    path: "/user-list",
    element: <UserList />,
    lable:'User List',
  },
  {
    path:"/user-list/:userId",
    element:<User/>,
    lable: "User detail"
  },
];
const router = createBrowserRouter(routerMaps);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
