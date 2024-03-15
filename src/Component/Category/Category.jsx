import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ProductCategories } from '../../Redux/CrudSlice/CrudSlice';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
export default function Category() {
    const dispatch = useDispatch();
    const  { categories} = useSelector((state) => state.Crud);
    
  
    useEffect(() => {
      dispatch(ProductCategories());
    }, [dispatch]);

    console.log("categories",categories)
  return (
    
    <div>
  
      <Grid container spacing={2}>
        {  categories.map((category) => (
          <Grid
            item
            key={category.id}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              height: '100px',
              width: '200px',
              border: '2px solid black',
              borderRadius: '1rem',
              padding: '1rem',
              margin: '1rem',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {category}
          </Grid>
        ))}
      </Grid>
    
  </div>
  )
}
