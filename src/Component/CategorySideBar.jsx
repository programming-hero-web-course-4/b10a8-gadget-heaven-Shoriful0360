
import React from 'react';
import { NavLink } from 'react-router-dom';


const CategorySideBar = ({categories}) => {
 
    return (
      <div>
        <h1 className='text-lg font-semibold py-5'>Explore Cutting-Edge Gadgets</h1>
          <div className='grid grid-cols-4'>
            <div className='col-span-1 grid grid-cols-1 text-start text-lg font-semibold'>
            <h1 className='cursor-pointer'>All Product</h1>
              {
                categories.map(category=><NavLink key={category.product_id} to={`/category/${category.category}`}>{category.category}</NavLink>)
              }
            </div>
            <div  className='col-span-3 grid grid-cols-3'>
            
            </div>
          
            
        </div>      
      </div>
    );
};

export default CategorySideBar;