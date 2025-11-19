import React from 'react';
import { createBrowserRouter } from "react-router";

import Home from './Pages/Home/Home';
import RootLayOut from '../../LayOut/RootLayOut/RootLayOut';
import Coverage from './Pages/Coverage/Coverage';

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
]);

export default Router;