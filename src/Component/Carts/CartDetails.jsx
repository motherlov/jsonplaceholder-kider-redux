import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { cartDetails } from '../../Redux/CartSlice/CartSlice';
export default function CartDetails() {
    const { id} = useParams();
    const dispatch = useDispatch();
    const {data}= useSelector((state) => state.Cart);
    useEffect(() => {
          dispatch(cartDetails(id));
        },[dispatch]);
        console.log("data",data);


  return (


    <div>
      <h1>Cart Details</h1>
    
        <div>
          {/* <h3>Cart #{cart.id}</h3> */}
          <ul>
            { data && data.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>{product.title}</div>
                <div>Price: ${product.price}</div>
                <div>Quantity: {product.quantity}</div>
                <div>Total: ${product.total}</div>
                <div>Discount Percentage: {product.discountPercentage}%</div>
                <div>Discounted Price: ${product.discountedPrice}</div>
              </li>
            ))}
          </ul>
        </div>
    
    </div>
  )
}
