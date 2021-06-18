import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd) =>total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10;
    // const grandTotal = (total + shipping + Number(tax).toFixed());
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Item Added: {cart.length}</h5>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: {formatNumber(tax)} </p>
            <p>Total Price: ${formatNumber(total + tax+ shipping)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;