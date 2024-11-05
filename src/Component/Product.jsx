
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_image, price, product_title,product_id } = product || {}
    return (
        <Link to={`/Id/${product_id}`}>
        
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    className='w-72 h-40 rounded-md '
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col items-center mt-4 ">
                <h2 className="card-title">{product_title}</h2>
                <h2 className="card-title">Price: {price} $</h2>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Product;