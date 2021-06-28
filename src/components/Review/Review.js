import React, { useEffect, useState } from 'react';
import ReviewItem from '../../fakeData/ReviewItem/ReviewItem';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/shipment');
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

        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))

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
                    <button className="productButton" onClick={handleProceedCheckout}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;