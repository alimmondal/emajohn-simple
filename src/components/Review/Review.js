import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../../fakeData/ReviewItem/ReviewItem';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        // console.log('place order clicked');
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKeys) => {
        // console.log('clicked', productKeys);
        const newCart = cart.filter(pd => pd.key !== productKeys);
        setCart(newCart);
        removeFromDatabaseCart(productKeys);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt="" />
    }


    return (
        <div className="shop-container">
            <div className="productContainer">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItem>)

                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="productButton" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;