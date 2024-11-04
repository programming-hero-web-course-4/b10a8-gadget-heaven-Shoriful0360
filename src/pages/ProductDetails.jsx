
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
const {id}=useParams();
const products=useLoaderData()
const [product,setProduct]=useState({});
const {category,description,price,product_image,product_title,ratin,specification}=product
useEffect(()=>{
const productId=[...products].find((Id=>Id.product_id===parseInt(id)));
if(productId){
    setProduct(productId)
}
},[])
    return (
       
        <div className="card card-side mt-10 bg-base-100 shadow-xl">
        <figure>
          <img
            src={product_image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className=" text-xl font-bold">{product_title}</h2>
          <h2 className='text-xl font-semibold'>Price: {price}</h2>
          <p>{description}</p>
         <ol>
         {
                specification.map((item,idx)=><li className='list-none' key={idx}>{item}</li>)
            }
         </ol>
          
        </div>
      </div>
    );
};

export default ProductDetails;