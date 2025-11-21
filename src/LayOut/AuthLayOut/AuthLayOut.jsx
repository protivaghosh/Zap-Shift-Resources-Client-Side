import React from 'react';

import { Outlet } from 'react-router';
import AuthImage from '../../assets/authImage.png'
import Logo from '../../Component/Logo/Logo';

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#eaeced] p-6'>
            <div>
                <Logo></Logo>
            </div>
        <div className='flex'>
              <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={AuthImage} alt="" />
            </div>
        </div>
          
        </div>
    );
};

export default AuthLayOut;