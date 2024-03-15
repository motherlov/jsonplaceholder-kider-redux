import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { commentData } from '../../Redux/CrudSlice/CrudSlice';
import { useDispatch,useSelector } from 'react-redux';
import { productDetails } from '../../Redux/CrudSlice/CrudSlice';




import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ProductDetails = () => {
    const dispatch =useDispatch()
    const {id}=useParams()
  const {product} =useSelector((state)=>state.Crud)
    useEffect(()=>{
        dispatch(productDetails(id));
    },[id,dispatch]);
     console.log("product", product)

const {comments} = useSelector((state)=>state.Crud)
     useEffect(()=>{
      dispatch(commentData());
  },[dispatch])

  console.log("comments",comments)
  return (
    <>
    <div>
        {product && 
        <ul key ={product.id} style={{margin:'0px',listStyle:'none',padding:'0px',backgroundColor:'pink'}}>
          <h1 style={{color:'white',backgroundColor:'black',margin:'0px'}} >{product.title}</h1>
          <img src={product.thumbnail} style={{width:'50%',borderRadius:'2rem 0rem 2rem 0rem'}} />
          <li style={{ display:'flex',flexDirection:'row', justifyContent:'space-evenly'}} ><h3>{product.title}</h3>  <h3 style={{color:'green'}} >{product.price} $ </h3></li>
          <li style={{width:'70%',margin:'auto'}} ><h5>{product.description}</h5></li>

          <li style={{width:'70%',margin:'auto'}} ><h5>Category: {product.category}</h5></li>
          <li style={{width:'70%',margin:'auto',fontSize:'20px'}} ><h5><StarIcon/>Rating: {product.rating}</h5></li>
        

          <div style={{width:'70%',marginInline:'auto',display:'flex',flexDirection:'column'}}>
          <img src={product.images[0]} style={{width:'40%',borderRadius:'2rem 0rem 0rem 2rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={product.images[1]} style={{width:'40%',borderRadius:'0rem 2rem 2rem 0rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={product.images[2]} style={{width:'40%',borderRadius:'2rem 0rem 0rem 2rem',border:'2px solid black',marginInline:'auto'}} />
          <img src={product.images[3]} style={{width:'40%',borderRadius:'0rem 2rem 2rem 0rem',border:'2px solid black',marginInline:'auto'}} />
          </div>
          
        </ul>
        
        } 
    </div>

 {/* comments */}
<>
<h1>comments</h1>
{ comments && comments.map((comment) => (
<Paper elevation={3} style={{ padding: '15px', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Avatar alt={comment.user.username} />
        <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>
          {comment.user.username}
        </Typography>
      </div>
      <Typography variant="body1">{comment.body}</Typography>
    </Paper>
))}
    </>

    </>

  )
}

export default ProductDetails;