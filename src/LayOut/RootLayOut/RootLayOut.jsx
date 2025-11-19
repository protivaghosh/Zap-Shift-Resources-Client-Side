import React from 'react';
import Navbar from '../../Component/Router/Pages/Shered/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Router/Pages/Shered/Footer/Footer';

const RootLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#eaeced] p-6'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;