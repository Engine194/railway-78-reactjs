import React from 'react';
import ReactDOM from 'react-dom/client';
import './Component/styles/index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserList from './Component/UserList';
import User from './Component/User';

export const routeMap = [
  {
    path: "/",
    element: <App />,
    label: 'Home',
    isMain: true
  },
 
  {
    path: '/UserList',
    element: <UserList />,
    label: 'UserList',
    isMain: true
  },
  {
    path: "/user-list/:userId",
    element: <User />,
    isMain: false
  }
]

const router = createBrowserRouter(routeMap);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
