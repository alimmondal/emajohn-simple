import React from 'react';
import './Product.css';

const Product = ({ product,handleAddProduct }) => {
    // console.log(product)
    return (
        <div className="product">
            <div>
                <img src={product.img} alt="" />
            </div>
            <div style={{textAlign:'justify', marginLeft:'20px'}}>
                <h4 className="productName">{product.name}</h4>
                <p>by:{product.seller}</p>
                <p>Price: ${product.price}</p>
                <p>Only{product.stock} left in stock- order soon</p>
                <p>feature: {product.star}</p>
                <button className="productButton" onClick={ () => handleAddProduct(product)}>
                    <svg style={{height:'15px', marginTop:''}} className="w-5 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;