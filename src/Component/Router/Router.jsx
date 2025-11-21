import React from 'react';
import { createBrowserRouter } from "react-router";

import Home from './Pages/Home/Home';
import RootLayOut from '../../LayOut/RootLayOut/RootLayOut';
import Coverage from './Pages/Coverage/Coverage';
import AuthLayOut from '../../LayOut/AuthLayOut/AuthLayOut';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';

const Router =createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/coverage',
            Component: Coverage,
            loader: () => fetch('/services-center.json').then(res => res.json())
        }
    ]
  },
  {
    path: '/',
    Component: AuthLayOut,
    children:[
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  }
]);

export default Router;