import React, { useEffect, useState } from 'react'
import "./Payment.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  let history = useHistory();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
   
    
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout {
                        <Link to="/checkout">{basket?.length} Item</Link>
                       
                    }
                    
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delevery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


                <div className='payment_section'>
                    <h3>Payment Method</h3>

                    <div className='payment_details'>
                        {/* Stripe magic will go */}
                        <form onSubmit={e => history.push('/orders')}>
                            <CardElement onChange={handleChange} />
                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment