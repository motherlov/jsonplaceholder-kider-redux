import React, { useEffect, useState } from 'react';
import {Grid} from '@mui/material';
import { product } from '../../Redux/CrudSlice/CrudSlice';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchSearchResults } from '../../Redux/CrudSlice/CrudSlice';
import { TablePagination } from '@mui/material';
const Product = () => {
    const dispatch = useDispatch();
      const {products} = useSelector((state)=>state.Crud)  
    useEffect(()=>{
        dispatch(product());
    },[dispatch])

    const [query, setQuery] = useState('');
    console.log("query",query)
    // const {results}= useSelector((state)=>state.Crud)
    const handleSearch = (e) => {
      e.preventDefault();
      dispatch(fetchSearchResults(query));
    };

    
 ////////////////////////////////pagination //////////////////
 const [pg, setpg] = useState(0); 
  const [rpg, setrpg] =useState(6); 
  const handleChangePage =(event, newpage)=> {  setpg(newpage); } 
  const handleChangeRowsPerPage =(event)=> { 
      setrpg(parseInt(event.target.value, 10)); 
      setpg(0); } 

 console.log("products",products)

  return (

//////////////////////////////////////////////////////////////

<div>

<br/>

<input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
<br/>
<br/>
<br/>
  <Grid container spacing={2}>
    {Array.isArray(products) && products.slice(pg * rpg, pg * rpg + rpg).map((item) => (
       <Link to={`/products/${item.id}`} sx={{textDecoration:'none'}}>
      <Grid
        item
        key={item.id}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          height: '460px',
          width: '560px',
          border: '2px solid black',
          borderRadius: '1rem',
          padding: '2rem',
          margin: '1px',
          overflow: 'hidden',
        }}
      >
        <div style={{ height: '260px', overflow: 'hidden' }}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <br />
        <h3 style={{ padding: '0', margin: '0' }}>
          {item.title.substring(0, 18)}
        </h3>
        <br />
        <hr />
        Description: {item.description.substring(0, 200)}...
      </Grid>
      </Link>
    ))}
  </Grid>

<TablePagination 
                rowsPerPageOptions={[6, 10, 30]} 
                component="div"
                count={products.length} 
                rowsPerPage={rpg} 
                page={pg} 
                onPageChange={handleChangePage} 
                onRowsPerPageChange={handleChangeRowsPerPage} 
            /> 

</div>




  )
}

export default Product