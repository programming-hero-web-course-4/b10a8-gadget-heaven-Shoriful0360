

import React, { useEffect, useState } from 'react';
import AddCart from '../Component/AddCart';
import WishListCart from '../Component/WishListCart';
import { getStoreDataList, getStoreWhistList, removeData } from '../utility/DataStore';
import Product from '../Component/Product';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
    const location = useLocation('/dashboard')
    const allData=useLoaderData()
    // console.log(location)
    const [favorite, setFavorite] = useState([])
    const [wishFavorite,setWishFavorite]=useState([])
    const [active,setActive]=useState('null')
    console.log(active)

    // const [price, setPrice] = useState(0)
    useEffect(() => {
        const getData = getStoreDataList()
        const getWishData=getStoreWhistList()
        setWishFavorite(getWishData)

        setFavorite(getData)



    }, [getStoreDataList,getStoreWhistList])

    const handleCartAndWishlistBtn=(name)=>{
       setActive(name)

    }

    
    const handleDelet = (Id) => {      
       removeData(Id)
        const getData = getStoreDataList()

        setFavorite(getData)
    }
    const handleSortPrice=(name)=>{
        if(name==='addPrice'){
            const sortPrice=[...favorite].sort((a,b)=>a.price - b.price)
            setFavorite(sortPrice)
          
        }
    }


    // add price functionality

    const handleTotalAmount=(amount)=>{
        console.log(amount)
    }



    return (
        <div className=''>
            <div className="hero  bg-[#9538E2] rounded-md min-h-[400px]">
                <div className=" text-center">
                    <div className="px-10 text-center">
                        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button onClick={()=>handleCartAndWishlistBtn('cart')} className="btn text-begoni text-lg">Cart</button>
                        <button  onClick={()=>handleCartAndWishlistBtn('wishList')} className="btn text-begoni ml-2 text-lg">WishList</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div><h1>Cart</h1></div>
                <div className='flex gap-6 items-center'>
                    <h1 className='text-xl font-semibold'>Total cost: <small></small></h1>
                    <button onClick={()=>handleSortPrice('addPrice')} className='btn'>Sort by price </button>
                    <button className='btn'>Purchase</button>
                </div>
            </div>
            <h1  className='text-4xl font-bold mt-4'>Add Your Favorite Card</h1>
           {
            active ==='null' &&(
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                  favorite.map(product=><Product handleDelet={handleDelet}  key={product.produt_id} product={product}></Product>)
                }
              </div>
            )
           }
            {
                active==='cart' &&(
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                      favorite.map(product=><Product handleDelet={handleDelet}  key={product.produt_id} product={product}></Product>)
                    }
                  </div>
                )
            }

            {
                active==='wishList' && (
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                      wishFavorite.map(product=><Product handleDelet={handleDelet}  key={product.produt_id} product={product}></Product>)
                    }
                  </div>
                )
            }
           
          

        </div>
    );
};

export default Dashboard;