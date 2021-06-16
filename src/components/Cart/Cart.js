import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);

    // const totalPrice = cart.reduce((total, prd) =>total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Added: {cart.length}</h5>
            <p>Total: ${totalPrice}</p>
        </div>
    );
};

export default Cart;