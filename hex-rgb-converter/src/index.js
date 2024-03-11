import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './component/UserForm';
import UserList from './component/UserList';
import User from './component/User';

export const routeMaps = [

  {
    path: '/',
    element: <App/>,
    label: 'Home',
  },
  {
    path: '/user-form',
    element: <UserForm/>,
    label: 'User form',
  },
  {
    path: '/user-list',
    element: <UserList/>,
    label: 'User list',
  },
  {
    path: '/user-list/:userId',
    element: <User/>,
    label: 'User details', 
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
