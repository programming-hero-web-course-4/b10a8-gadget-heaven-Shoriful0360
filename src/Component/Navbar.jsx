
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";


const Navbar = () => {
    return (
       <div className=' '>
         <div className="navbar  fixed mx-auto container z-50 backdrop-blur-lg bg-white rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                 <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/statistic'}>Statistics</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/dashboard'}>Dashboard</NavLink>
            </ul>
          </div>
          <NavLink className="btn btn-ghost font-bold text-xl">daisyUI</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 menu-horizontal px-1">
           
          <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/statistic'}>Statistics</NavLink>
            <NavLink className={({isActive})=>`${isActive?'text-warning':'hover:bg-green-200'}`} to={'/dashboard'}>Dashboard</NavLink>

       
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <NavLink className={'text-3xl p-3 bg-green-200 rounded-full'}><MdAddShoppingCart></MdAddShoppingCart></NavLink>
          <NavLink className={'text-3xl p-3 bg-green-200 rounded-full'}><GiSelfLove/></NavLink>
        </div>
      </div>
       </div>
    );
};

export default Navbar;<h1>I am Navbar</h1>