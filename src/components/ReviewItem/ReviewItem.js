import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
};

export default ReviewItem;


// import React from 'react';

// const ReviewItem = (props) => {
//     // console.log(props);
//     const {name, quantity, key, price} = props.product;
//     const reviewItemStyle = {
//         borderBottom: '1px solid lightgray',
//         marginBottom: '5px',
//         paddingBottom: '5px',
//         marginLeft: '200px',
//         width: '75%'
//     }
//     return (
//         <div style={reviewItemStyle}>
//             <h4 className="productName">Product Name: {name}</h4>
//             <p>Quantity: {quantity}</p>
//             <p>Price: {price}</p>
//             <button 
//             className="productButton"
//             onClick = {()=> props.removeProduct(key)}
//             >Remove Item</button>
//         </div>
//     );
// };

// export default ReviewItem;