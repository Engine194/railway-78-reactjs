import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserList from './Components/UserList';
import User from './Components/User'
import App from './Components/App';

export const routeMaps = [
  {
    path: "/",
    element: <App/>,
    label: "Home",
    isMain: "true"
  },
  {
    path: "/user-list",
    element: <UserList/>,
    label: "User list",
    isMain: "true"
  },
  {
    path: "user-list/:userId",
    element: <User/>,
    label: "User detail",
    isMain: "false"
  }
]

const router = createBrowserRouter(routeMaps)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
