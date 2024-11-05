
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import addLocalStorageData from '../utility/DataStore';
import addWishlistStoreData from '../utility/DataStore';

const ProductDetails = () => {
  const {id}=useParams();
  const allProductData=useLoaderData()
 const [product,setProduct]=useState({});
 const {category,description,price,product_image,product_title,rating,specification}=product
 useEffect(()=>{
const productId=[...allProductData].find(productId=>productId.product_id===parseInt(id))
if(productId){
  setProduct(productId)
}
else {
  setProduct({})
}

 },[])
 const handleStorage=(Id)=>{
 
  addLocalStorageData(Id)
 }
 const handleWishlistStorageData=(Id)=>{
  addWishlistStoreData(Id)
  
 }
 
 

    return (
      <div>
        
        <div className="hero  bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className='space-y-3'>
      <h1 className="text-5xl font-bold">{product_title}</h1>
      <h2 className='text-xl font-semibold'>Price: {price} $</h2>
      <button className='btn bg-success text-white text-base'>In stock</button>
      <h2 className='text-xl font-semibold'>Descripiton: {description}</h2>
      <div>
        {
          specification?.map((item,idx)=><li key={idx} className='list-none'>{item}</li>)
        }
      </div>
     
      
      <h2 className='text-xl flex text-center items-center gap-3 justify-center font-semibold'>Rating: {rating} <FaRegStar className='bg-warning' /> </h2>
      <button onClick={()=>handleStorage(id)} className="btn btn-primary">Add to card</button>
      <button onClick={()=>handleWishlistStorageData(id)} className="btn btn-primary ml-3">WishList</button>
    </div>
  </div>
</div>
      </div>
       
 
    );
};

export default ProductDetails;