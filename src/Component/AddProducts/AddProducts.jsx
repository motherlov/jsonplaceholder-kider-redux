import React from 'react'
 import { useState } from 'react';
 import { addProduct } from '../../Redux/CrudSlice/CrudSlice';
 import { useSelector, useDispatch } from 'react-redux';
export default function AddProducts() {

    const [formData, setFormData] = useState({
        title: '',
        // description: '',
        // price: '',
      });
    

     const dispatch =useDispatch()
    const addedProduct = useSelector((state) => state.Crud.addedProduct);
    const status = useSelector((state) => state.Crud.status);
    const error = useSelector((state) => state.Crud.error);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(formData));
      };
  return (
    <div>
      <h1>Add Product</h1>
      <form >
        <label>Title :</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product title"
        />
        <br />
        {/* <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
        /> */}
        <br />
        {/* <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
        /> */}
        <br />
        {/* Add more input fields as needed */}
        <button onClick={handleSubmit} type="submit">Add Product</button>
      </form>
      {status === 'loading' && <div>Adding product...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && addedProduct && (
        <div>
          Product added successfully:
          <br />
          title: {addedProduct.title}
          {/* <br />
          Description: {addedProduct.description}
          <br />
          Price: {addedProduct.price} */}
        </div>
      )}
    </div>
  )
}
