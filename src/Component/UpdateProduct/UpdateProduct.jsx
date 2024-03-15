import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateProduct } from '../../Redux/CrudSlice/CrudSlice';
import { deleteProduct } from '../../Redux/CrudSlice/CrudSlice';
export default function UpdateProduct() {
    const dispatch = useDispatch();

  const deletedProductId = useSelector((state) => state.Crud.deletedProductId);
  const updatedProduct = useSelector((state) => state.Crud.updatedProduct);

  const status = useSelector((state) => state.Crud.status);
  const error = useSelector((state) => state.Crud.error);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: 1,formData }));
  };
  const handleDelete = () => {
    dispatch(deleteProduct(1)); // Delete product with ID 1
  };

  return (
    <div>
    <h1>Update Product</h1>
    <form >
        <label>Title :</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Product Title"
      />
      <br />
      <label>description :</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <br />
      <label>Price:</label>
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <br />
      {/* Add more input fields as needed */}
      <button onClick={handleSubmit} type="submit">Update Product</button>
      <br/>
      <br/>
     
    </form>



    {status === 'loading' && <div>Updating product...</div>}
    {status === 'failed' && <div>Error: {error}</div>}
    {status === 'succeeded' && updatedProduct && (
      <div>
        Product updated successfully:
        <br />
        Title: {updatedProduct.title}
        <br />
        Description: {updatedProduct.description}
        <br />
        Price: {updatedProduct.price}
      </div>
    )}
    
   
     <button onClick={handleDelete}>Delete Product</button>
    
  
      {status === 'succeeded' && deletedProductId && (
        <div>
          Product deleted successfully with ID:
          {/* {deletedProductId} */}
        </div>
      )}
  </div>
  )
}
