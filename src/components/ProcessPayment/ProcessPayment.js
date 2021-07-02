import React from 'react';
import { Elements, CardElement  } from '@stripe/react-stripe-js';
import { loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import SplitForm from '../SplitForm/SplitForm';


const stripePromise = loadStripe('pk_test_51HXU4WDT6p86lEJWnBuOu8Sjz5bZLiaEThvHPob2P1pF9dF9Af82LQqgEDwtcQPFrq9ReQuopwwOqpwlcjihz0Na00MV1EbaHI');


const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
               <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;



