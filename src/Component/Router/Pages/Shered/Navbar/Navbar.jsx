import React from 'react';
import Logo from '../../../../Logo/Logo';
import { Link, NavLink } from 'react-router';
import UseAuth from '../../../../../Hooks/UseAuth';

const Navbar = () => {
  const {user, logOut} =UseAuth();

  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    });
  }
    const link = <>
            <li><a>Services</a></li>
            <li><a><NavLink to='/coverage'>Coverage</NavLink></a></li>
            <li><a><NavLink to='/sendParcel'>Send Parcel</NavLink></a></li>
            <li><a>About Us</a></li>
            <li><a>Pricing</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>

            {
              user && <>
              <li><a><NavLink to='/DashBoard/my-parcels'>MY Parcel</NavLink></a></li>
              </>
            }
    </>
    return (
        <div className='mb-16'>
            <div className="navbar rounded-xl bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
   {
    user? <a onClick={handleLogOut} className="btn">Log Out</a> :  <Link to='/login' className="btn">Log In</Link>
   }

   <Link to='/rider' className="btn text-black bg-[#caeb66]">Be a rider</Link>
  </div>
</div>
        </div>
        
    );
};

export default Navbar;