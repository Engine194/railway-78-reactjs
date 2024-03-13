import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import User from './Components/User';
import Tai from './Components/Tai';

 export const routeMaps = [
  {
    path: '/',
    element: <App/>,
    lable: 'Home',
    isMain: true,
  }
    ,
  // {
  //   path: '/user-form',
  //   element: <UserForm/>,
  //   lable: 'User form',
  // },
  {
    path: '/user-list',
    element: <UserList/>,
    lable: 'User list',
    isMain: true,
  },
  
  {
    path:'/user-list/:userId',
    element: <User/>,
    lable: "User detali",
    isMain: true,
  },

  {
    path:'/thanhtai',
    element: <Tai/>,
    lable: "Exercise1",
    isMain: true,
  }

 ]

const router = createBrowserRouter(routeMaps);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
