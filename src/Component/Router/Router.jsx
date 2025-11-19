import React from 'react';
import { createBrowserRouter } from "react-router";

import Home from './Pages/Home/Home';
import RootLayOut from '../../LayOut/RootLayOut/RootLayOut';

const Router =createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children:[
        {
            index: true,
            Component: Home
        }
    ]
  },
]);

export default Router;