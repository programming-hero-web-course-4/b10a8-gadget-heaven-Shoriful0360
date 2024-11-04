

import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {

   
    return (
        <div>
          <div className='h-4'>
          <Navbar></Navbar>
          </div>
       <div className='min-h-[calc(100vh-250px)] mx-auto py-10'>
       <Outlet></Outlet>
       </div>
           <Footer></Footer>
        </div>
    );
};

export default Layout;