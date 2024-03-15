// import React from 'react'
// import { useDispatch,useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { Grid } from '@mui/material';
// import { category } from '../../Redux/CrudSlice/CrudSlice';
// export default function CategoryProduct() {
//     const dispatch = useDispatch();
//     const categoryProducts = useSelector((state) => state.Curd);

  
//     useEffect(() => {
//       dispatch(category(category));
//     }, [dispatch]);

//     console.log("categoryProducts",categoryProducts);

//   return (
//     <div>
    
//       <Grid container spacing={2}>
//         { categoryProducts && categoryProducts.map((product) => (
//           <Grid
//             item
//             key={product.id}
//             sx={{
//               backgroundColor: 'white',
//               color: 'black',
//               height: '460px',
//               width: '560px',
//               border: '2px solid black',
//               borderRadius: '1rem',
//               padding: '2rem',
//               margin: '2px',
//               overflow: 'hidden',
//             }}
//           >
//             <div style={{ height: '260px', overflow: 'hidden' }}>
//               <img src={product.thumbnail} alt={product.title} />
//             </div>
//             <br />
//             <h3 style={{ padding: '0', margin: '0' }}>
//               {product.title.substring(0, 18)}
//             </h3>
//             <br />
//             <hr />
//             Description: {product.description.substring(0, 200)}...
//           </Grid>
//         ))}
//       </Grid>
    
//   </div>
//   )
// }
