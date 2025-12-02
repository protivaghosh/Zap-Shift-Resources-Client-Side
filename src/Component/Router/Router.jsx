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
import DashBoard from '../../LayOut/DashBoard/DashBoard';
import MyParcels from './Pages/DashBoard/MyParcels/MyParcels';
import Payment from './Pages/DashBoard/Payment/Payment';
import PaymentSuccess from './Pages/DashBoard/Payment/PaymentSuccess';
import PaymentCancel from './Pages/DashBoard/Payment/PaymentCancel';

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
  },
  {
    path : '/dashboard',
    element : <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path: 'my-parcels',
        element : <MyParcels></MyParcels>
      },
      {
        path : 'payment/:parcelId',
        element : <Payment></Payment>
      },
      {
        path : 'payment-success',
        element : <PaymentSuccess></PaymentSuccess>
      },
      {
        path : 'payment-cancel',
        element : <PaymentCancel></PaymentCancel>
      }
    ]
  }
]);

export default Router;


