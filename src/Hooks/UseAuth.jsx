import React, { use } from 'react';
import { AuthContext } from '../Component/Router/Pages/Auth/AuthContext/AuthContext';

const UseAuth = () => {

    const authInfo = use(AuthContext)
    return authInfo
};

export default UseAuth;