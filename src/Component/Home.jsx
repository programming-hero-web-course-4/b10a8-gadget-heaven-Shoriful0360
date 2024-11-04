
import React from 'react';
import Banner from './Banner';
import CategorySideBar from './CategorySideBar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories=useLoaderData();
   
    
    return (
        <div>
            <Banner></Banner>
            <CategorySideBar categories={categories}></CategorySideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;