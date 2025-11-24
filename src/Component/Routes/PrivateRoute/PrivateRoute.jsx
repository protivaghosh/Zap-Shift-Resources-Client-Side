import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const PrivateRoute = ({children}) => {

    const {user, loading}= UseAuth();
    const location = useLocation();
     
    if(loading){
        return <div>
            <span className="loading loading-dots loading-xl"></span>
        </div>
     }

     if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
     }
    return children;
};

export default PrivateRoute;