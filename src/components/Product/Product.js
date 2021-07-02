import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showAddToCart === true && <button
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>}
            </div>

        </div>
    );
};

export default Product;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Product.css';

// const Product = (props) => {
//     // console.log(props);
//     const {img, name, seller, stock, price, star, key} = props.product;
//     return (
//         <div className="product">
//             <div>
//                 <img src={img} alt="" />
//             </div>
//             <div style={{textAlign:'justify', marginLeft:'20px'}}>
//                 <h4 className="productName"> <Link to={"/product/"+key}>{name}</Link> </h4>
//                 <p>by:{seller}</p>
//                 <p>Only{stock} left in stock- order soon</p>
//                 <p>feature: {star}</p>
//                 <p>Price: ${price}</p>
//                 {props.showAddToCart && <button 
//                 className="productButton" onClick={ () => props.handleAddProduct(props.product)}>
//                     <svg style={{height:'15px', marginTop:''}} className="w-5 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>Add to cart
//                     </button>}
//             </div>

//         </div>
//     );
// };

// export default Product;