import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
 import { useLocation } from 'react-router-dom';

const Navbar = () => {
   const location = useLocation();
     const fullUrl = `${location.pathname}`
     const isLoginOrRegistration = fullUrl==="/login" || fullUrl==="/register";
  return (
    <> 
    {!isLoginOrRegistration && ( 
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/add" style={{ textDecoration: 'none', color: '#fff' }}>Add Product</Link>
      <Link to="/update" style={{ textDecoration: 'none', color: '#fff' }}>Update Product</Link>
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Product</Link>
      <Link to="/blog" style={{ textDecoration: 'none', color: '#fff' }}>Blog</Link>
      <Link to="/carts" style={{ textDecoration: 'none', color: '#fff' }}>Carts</Link>
      <Link to="/category" style={{ textDecoration: 'none', color: '#fff' }}>Category</Link>

     
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
       <Link to="/user">
         <Avatar alt="user" />
       </Link>
      </div>
    

    </nav>
    )}
    </>
  );
};

export default Navbar;
