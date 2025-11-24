import React from 'react';

import { Outlet } from 'react-router';
import AuthImage from '../../assets/authImage.png'
import Logo from '../../Component/Logo/Logo';

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>   
                    <Logo></Logo>
                </div>
        <div className='flex items-center h-full mt-6'>
              <div className='flex-1 bg-[#ffffff]'>
                
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