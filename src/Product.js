import React from 'react'
import { AiFillStar } from "react-icons/ai";
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({id, title,price, image, rating}) {
const [{basket}, dispatch] = useStateValue();
console.log("this is the basket => ",basket);
  const addToBasket = ()=>{
// dispatch the item into the data layer
dispatch({
  type: "ADD_TO_BASKET",
  item: {
       id: id,
    title: title,
    price: price,
    image: image,
    rating: rating,
  },
})

  }
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small style={{fontWeight: "bold"}}>	₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
            {Array(rating).fill().map((_, i)=>(
                <AiFillStar style={{color: "#f0c14b"}}/>
            ))}
            
            
            </div>
        </div>
        <img src={image}/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product