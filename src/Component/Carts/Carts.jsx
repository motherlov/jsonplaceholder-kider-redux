import React, { useEffect } from 'react'
 import { Grid } from '@mui/material'
 import { useDispatch,useSelector } from 'react-redux'
 import { cartsData } from '../../Redux/CartSlice/CartSlice'
 import { Link } from 'react-router-dom'
export default function Carts() {
    const dispatch = useDispatch()
    const  {carts} = useSelector((state)=>state.Cart)
     useEffect(()=>{
 dispatch(cartsData())
     },[dispatch])
     console.log("carts",carts);
  return (
    <div>
  <br/>
  <br/>
      <Grid container spacing={2}>
        {carts && carts.map((item) => (
           <Link to={`/carts/${item.id}`} sx={{textDecoration:'none'}}>
                 {item.products.map((product) => (
          <Grid
            item
            key={product.id}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              height: '460px',
              width: '560px',
              border: '2px solid black',
              borderRadius: '1rem',
              padding: '2rem',
              margin: '2px',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: '260px', overflow: 'hidden' }}>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <br />
            <h3 style={{ padding: '0', margin: '0' }}>
              {product.title}
            </h3>
            <div>Price: ${product.price}</div>
                  <div>Quantity: {product.quantity}</div>
                  <div>Total: ${product.total}</div>
            <br />
            {/* <hr /> */}
            {/* Description: {product.price} */}
          </Grid>
                 ))}
          </Link>
        ))}
      </Grid>
    
    </div>
    
    
  )
}
