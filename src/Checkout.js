import React from 'react'
import"./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
<img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/FEB_2020/SVD/STOREFRONT_BANNER/CORRECTED_MOV_FST/STOREFRONT_BANNER_1500X300._CB424201625_.jpg' alt=''/>

<div ><h2 className='checkout_title'>
    Your Shopping Basket</h2>
  {basket.map(item =>(
   <CheckoutProduct 
   id={item.id}
   title = {item.title}
   image = {item.image}
   price = {item.price}
   rating = {item.rating}
   />
  ))}
</div>
</div>
<div className='checkout-right'>
<Subtotal/>
</div>
    </div>
  )
}

export default Checkout