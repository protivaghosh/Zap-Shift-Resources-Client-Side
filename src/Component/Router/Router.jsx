import React from 'react';
import { createBrowserRouter } from "react-router";

import Home from './Pages/Home/Home';
import RootLayOut from '../../LayOut/RootLayOut/RootLayOut';
import Coverage from './Pages/Coverage/Coverage';
import AuthLayOut from '../../LayOut/AuthLayOut/AuthLayOut';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import PrivateRoute from '../Routes/PrivateRoute/PrivateRoute';
import Rider from './Pages/Rider/Rider';
import SendParcel from './Pages/SendParcel/SendParcel';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        )
      },
      {
        path : '/sendParcel',
        element : <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
         loader: () =>
          fetch("/services-center.json").then((res) => res.json())
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () =>
          fetch("/services-center.json").then((res) => res.json())
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayOut />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);

export default Router;


